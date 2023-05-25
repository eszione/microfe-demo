import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default () =>  (
    <li>
        <ul><NavLink className='navigation' to="tradepartners">Trade Partners</NavLink></ul>
        <ul><NavLink className='navigation' to="bookings">Bookings</NavLink></ul>
        <ul><NavLink className='navigation' to="locations">Locations</NavLink></ul>
        <ul><NavLink className='navigation' to="settings">Settings</NavLink></ul>
    </li>
);
