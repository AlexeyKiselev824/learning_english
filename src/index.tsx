import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from 'src/containers/App/App';
import { LazyAbout } from 'src/pages/about/About.lazy';
import { Shop } from 'src/pages/shop';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: (
                    <Suspense fallback={'Loading...'}>
                        <LazyAbout />
                    </Suspense>
                ),
            },
            {
                path: '/shop',
                element: (
                    <Suspense fallback={'Loading...'}>
                        <Shop />
                    </Suspense>
                ),
            },
        ],
    },
]);

root.render(<RouterProvider router={router} />);
