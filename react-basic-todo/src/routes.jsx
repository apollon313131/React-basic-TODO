import React from 'react';
import { MarkList } from './components/MarksList/MarkList';
import { SupportForm } from './components/SupportForm/SupportForm';
// import { Menu } from './components/Menu/Menu';
import { NameForm } from './components/NameForm/NameForm';
import { AuthLayout } from './layouts/auth';
import { MainLayout } from './layouts/main';
import { Login } from './components/Login/Login';


export const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        routes: [
            {
                path: '/auth',
                component: Login
            },

        ]
    },
    {
        path: '*',
        component: MainLayout,
        routes: [
            {
                path: '/support',
                component: SupportForm
            },
            {
                path: '/name',
                component: NameForm
            },
            {
                path: '/',
                component: MarkList
            },

        ]
    }
]