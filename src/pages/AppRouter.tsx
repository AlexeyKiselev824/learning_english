import { Suspense } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from 'src/containers/Home';
import { Shop } from './Shop';
import { About } from './About';
import Main from './Main';

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Main />}
            // loader={rootLoader}
            // action={rootAction}
            // errorElement={<ErrorPage />}
        >
            <Route>
                <Route path="/" element={<Home />} />
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={'Loading...'}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="/shop"
                    element={
                        <Suspense fallback={'Loading...'}>
                            <Shop />
                        </Suspense>
                    }
                />
                <Route path="/*" element={<Navigate replace to="/" />} />
            </Route>
        </Route>,
    ),
);
