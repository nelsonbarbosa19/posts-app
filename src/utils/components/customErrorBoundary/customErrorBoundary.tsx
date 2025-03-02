import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '../../../pages';

export const CustomErrorBoundary: React.FC<{ children: ReactNode }> = (
  props
) => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => <Error errorText={error.message} />}
      onError={(error, info) => {
        console.log('ErrorBoundary error: ' + JSON.stringify({ error, info }));

        /**  TODO: Call the error logging service. */
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
};
