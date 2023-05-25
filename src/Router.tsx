import './Router.css';
import { useRoutes } from "react-router-dom";
import Child from "./components/Child1/Child";
import Data from './components/Data/Data';

export const Router = () => {
    return useRoutes(
        [
            {
                path: '/', element: <Child className='router-child' />
            },
            {
                path: '/bookings', element: <Data />
            },
        ]
    );
};