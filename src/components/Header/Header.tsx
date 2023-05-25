import './Header.css';
import logo from '../../logo.svg';

export default () => (
    <header>
        <div>Motek Application</div>
        <img src={logo} className="header-logo" alt="logo" />
    </header>
);
