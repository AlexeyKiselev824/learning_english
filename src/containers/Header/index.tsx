import { FC } from 'react';
import { Link } from 'react-router-dom';
import IconSvg from 'src/assets/icon.svg';
import NavBar from './NavBar';
import classes from './Header.module.scss';

const Header: FC = () => {
    return (
        <div className={classes.header}>
            <div className={`${classes.container} _container`}>
                <Link className={classes.devlink} to="/">
                    <IconSvg name="user-icon" width="20px" height="20px" />
                </Link>
                <div className={classes.navbar}>
                    <NavBar />
                </div>
            </div>
        </div>
    );
};

export default Header;
