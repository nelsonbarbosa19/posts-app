import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface RetrieveProps extends Pick<AxiosRequestConfig, 'method'> {
  endpoint: string;
}

export interface RetrieveOutput<TInput, TOutput> {
  retrieve: (requestData?: TInput) => Promise<RetrieveDataOutput<TOutput>>;
}

export interface RetrieveDataOutput<TOutput> {
  data?: TOutput;
  success: boolean;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const useRetrieve = <
  TInput, // extends Record<string, string | number> | undefined,
  TOutput,
>({
  method,
  endpoint,
}: RetrieveProps): RetrieveOutput<TInput, TOutput> => {
  const navigate = useNavigate();

  const commonHeaders = {
    Accept: 'application/json',
    //'Authorization': `Bearer ${token}`
  };

  const retrieve = (
    requestData?: TInput
  ): Promise<RetrieveDataOutput<TOutput>> => {
    return new Promise<RetrieveDataOutput<TOutput>>((resolve) => {
      console.log('retrieve requestData: ' + JSON.stringify(requestData));

      /* Convert requestData to queryString */
      // const queryString = requestData
      //   ? Object.entries(requestData)
      //       .map(
      //         ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
      //       )
      //       .join('&')
      //   : '';

      const overrideHeaders =
        method === 'POST' || method === 'PUT' || method === 'PATCH'
          ? { 'Content-type': 'application/json; charset=UTF-8' }
          : {};

      const requestConfig: AxiosRequestConfig = {
        method: method,
        baseURL: baseUrl,
        url: endpoint,
        // For GET requests, use params for URL parameters
        ...(method === 'GET' && { params: requestData }),
        // For POST, PUT, PATCH requests, use data for request body
        ...((method === 'POST' || method === 'PUT' || method === 'PATCH') && {
          data: requestData,
        }),
        headers: {
          ...commonHeaders,
          ...overrideHeaders,
        },
      };

      // axios
      //   .get(baseUrl + endpoint + (queryString ? '?' + queryString : ''), {
      //     headers: {
      //       ...commonHeaders,
      //     },
      //   })
      axios(requestConfig)
        .then((response) => {
          debugger;
          if (
            !response.data ||
            !(response.status === 200 || response.status === 201)
          ) {
            resolve({
              data: undefined,
              success: false,
            });
          }

          const retrieveData = {
            data: response.data,
            success: true,
          };

          resolve({
            ...retrieveData,
          });
        })
        .catch((e) => {
          /* Error handling  */
          navigate('/error', {
            replace: true,
            state: { errorText: e.message ?? 'Unknown error' },
          });

          resolve({
            data: undefined,
            success: false,
          });
        });
    });
  };

  return { retrieve };
};
