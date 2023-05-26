import './Router.css';
import { Navigate, useRoutes } from "react-router-dom";
import Child from "./components/Child1/Child";
import Data from './components/Data/Data';
import Home from './components/Home/Home';
import { Routes, AddTradePartnerComponent, ViewTradePartnerComponent, EditTradePartnerComponent } from './microfe.imports';

export const Router = () => {
    return useRoutes(
        [
            {
                path: '/', element: <Home />
            },
            {
                path: '/bookings', element: <Data />
            },
            // {
            //     path: '/tradepartners2', element: <Routes />, children: [
            //         {
            //             path: 'add', element: <AddTradePartnerComponent />
            //         },
            //         {
            //             path: 'edit', element: <EditTradePartnerComponent />
            //         },
            //     ]
            // },
            {
                path: '/tradepartners', element: <Child className='router-child' />, children: [
                    // {
                    //     path: 'add', element: <AddTradePartnerComponent />
                    // },
                    // {
                    //     path: 'edit', element: <EditTradePartnerComponent />
                    // },
                ]
            },
            {
                path: '*', element: <Navigate to='/' />
            }
        ]
    );
};