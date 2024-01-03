import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import image from 'src/assets/image.jpg';
import IconSvg from 'src/assets/icon.svg';

const App = () => {
    const [count, setCounst] = useState<number>(0);

    return (
        <div data-testid="TestForPlugin">
            {__DEV__ && <div>DEV режим!</div>}
            <div>
                <img src={image} width="200px" height="220px" alt="" />
            </div>
            <div>
                <IconSvg width="50px" height="50px" className={classes.icon} />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <br />
            <h1 className={classes.value}>{count}</h1>
            <button
                className={classes.button}
                onClick={() => setCounst(prev => prev + 1)}
            >
                <span>increment</span>
            </button>
            <Outlet />
        </div>
    );
};

export default App;
