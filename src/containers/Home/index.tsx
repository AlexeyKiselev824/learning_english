import { FC } from 'react';
import img from 'src/assets/image.jpg';

const Home: FC = () => {
    return (
        <>
            <div>APP COMPONENT</div>
            <img src={img} width="200px" height="200px" alt="test" />
        </>
    );
};

export default Home;
