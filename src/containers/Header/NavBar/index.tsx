import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.scss';

const NavBar: FC = () => {
    return (
        <nav>
            <ul className={classes.list}>
                <li>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shop" className={classes.link}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
