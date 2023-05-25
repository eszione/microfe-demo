import './Header.css';
import logo from '../../logo.svg';

export default () => {
    return (
        <header>
            <div>Motek Application</div>
            <img src={logo} className="header-logo" alt="logo" />
        </header>
    );
};
