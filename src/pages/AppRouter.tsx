import { Suspense } from 'react';
import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Main from './Main';
import { About } from './About';
import { Shop } from './shop';
import Home from 'src/containers/Home';

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
