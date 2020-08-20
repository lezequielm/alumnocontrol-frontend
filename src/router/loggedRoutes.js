import React,{lazy} from "react";
import MainLayout from '../layouts/main';
import {Redirect} from "react-router-dom";



export default [
    {
        path: '/',
        component: MainLayout,
        routes: [
            {
                path: '/home',
                exact: true,
                component: lazy(() => import('../pages/home/index'))
            },
            {
                path: '/editProfile',
                exact: true,
                component: lazy(() => import('../pages/editProfile/index'))
            },
            {
                component: () => <Redirect to="/home" />
            }

        ]
    }
]

