import React, { JSX, lazy, Suspense } from 'react';

interface Opts {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

/**
 * Lazy load components for code splitting
 * @param importFunc - The import function for the component
 * @param selectorFunc - The selector function for the component
 * @param opts - The options for the lazy load
 * @returns The lazy load component
 */
export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>,
>(
  importFunc: () => T,
  selectorFunc: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null }
) => {
  const lazyFactory = () =>
    importFunc().then((module) => ({ default: selectorFunc(module) }));

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback ? opts.fallback : null}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// This is an example of what lazyLoad produces:
// const LazyComponent = lazy(() =>
//   import('./pages/home').then((module) => ({ default: module.Home }))
// );
