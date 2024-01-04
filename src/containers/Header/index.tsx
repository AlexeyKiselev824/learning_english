import { FC } from 'react';
import { Link } from 'react-router-dom';
import IconSvg from 'src/assets/icon.svg';

const Header: FC = () => {
    return (
        <div>
            {__DEV__ && <IconSvg width="50px" height="50px" />}

            <Link to={'/'}>home</Link>
            <br />
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <br />
            <div>Header</div>
        </div>
    );
};

export default Header;
