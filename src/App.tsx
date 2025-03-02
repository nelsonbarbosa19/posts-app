import { ThemeProvider } from './utils/theme/index.ts';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { PageBase, CustomErrorBoundary } from './components';
import { lazyLoad } from './utils/lazyLoad';

function App() {
  // Lazy-loaded pages
  const HomePage = lazyLoad(
    () => import('./pages/home/home.tsx'),
    (module) => module.Home
  );

  const PostDetailPage = lazyLoad(
    () => import('./pages/postDetail'),
    (module) => module.PostDetail
  );

  const AboutPage = lazyLoad(
    () => import('./pages/about'),
    (module) => module.About
  );

  const ErrorPage = lazyLoad(
    () => import('./pages/error'),
    (module) => module.Error
  );

  const NotFoundPage = lazyLoad(
    () => import('./pages/notFound'),
    (module) => module.NotFound
  );

  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <CustomErrorBoundary>
          <PageBase />
        </CustomErrorBoundary>
      ), // Layout base component
      children: [
        {
          index: true, // Default route (home page)
          element: <HomePage />,
        },
        {
          path: 'post/:id', // Post detail page
          element: <PostDetailPage />,
        },
        {
          path: 'about', // About page
          element: <AboutPage />,
        },
        {
          path: 'error', // Error page
          element: <ErrorPage />,
        },
        {
          path: '*', // Not Found (404) page
          element: <NotFoundPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
