import './Router.css';
import { useRoutes } from "react-router-dom";
import Child from "./components/Child1/Child";
import Data from './components/Data/Data';
import Home from './components/Home/Home';

export const Router = () => {
    return useRoutes(
        [
            {
                path: '/', element: <Home />
            },
            {
                path: '/bookings', element: <Data />
            },
            {
                path: '/tradepartners', element: <Child className='router-child' />
            },
        ]
    );
};