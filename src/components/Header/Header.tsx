import './Header.css';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export default () => (
    <header>
        <div>Motek Application</div>
        <NavLink to="/"><img src={logo} className="header-logo" alt="logo" /></NavLink>
    </header>
);
