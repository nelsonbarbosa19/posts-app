import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface RetrieveProps {
  endpoint: string; //Endpoint;
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
  TInput extends Record<string, string | number> | undefined,
  TOutput,
>({
  endpoint,
}: RetrieveProps): RetrieveOutput<TInput, TOutput> => {
  const navigate = useNavigate();

  const commonHeaders = {
    // 'Content-Type': 'application/json',
    Accept: 'application/json',
    //'Authorization': `Bearer ${token}`
  };

  const retrieve = (
    requestData?: TInput
  ): Promise<RetrieveDataOutput<TOutput>> => {
    return new Promise<RetrieveDataOutput<TOutput>>((resolve) => {
      console.log('retrieve requestData: ' + JSON.stringify(requestData));

      /* Convert requestData to queryString */
      const queryString = requestData
        ? Object.entries(requestData)
            .map(
              ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
            )
            .join('&')
        : '';

      axios
        .get(baseUrl + endpoint + (queryString ? '?' + queryString : ''), {
          headers: {
            ...commonHeaders,
          },
        })
        .then((response) => {
          if (!response.data || response.status !== 200) {
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
