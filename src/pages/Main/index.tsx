import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'src/containers/Footer';
import Header from 'src/containers/Header';

const Main: FC = () => {
    return (
        <>
            <Header />
            <main className="_main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Main;
