import React,{lazy} from "react";
import LoginLayout from '../layouts/login';
import {Redirect} from "react-router-dom";



export default [
    {
        path: '/',
        component: LoginLayout,
        routes: [
            {
                path: '/login',
                exact: true,
                component: lazy(() => import('../pages/login'))
            },
            {
                component: () => <Redirect to="/login" />
            }

        ]
    }
]