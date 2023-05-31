import './Router.css';
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import Data from './components/Data/Data';
import Home from './components/Home/Home';
import { tradePartnerRoutes } from './microfe.imports';

export const Router = () => {
    return useRoutes(
        [
            {
                path: '', element: <Home />
            },
            {
                path: 'bookings', element: <Data />
            },
            {
                path: 'tradepartners', element: <Outlet />, children: tradePartnerRoutes
            },
            {
                path: '*', element: <Navigate to='/' />
            }
        ]
    );
};