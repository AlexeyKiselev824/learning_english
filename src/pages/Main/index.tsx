import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'src/containers/Footer';
import Header from 'src/containers/Header';
import 'src/index.scss';

const Main: FC = () => {
    return (
        <div className="App">
            <Header />
            <main className="_main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
