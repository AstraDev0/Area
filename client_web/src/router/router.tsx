import { createBrowserRouter } from 'react-router-dom';

import Redirection from '../pages/Redirection';
import Home from '../pages/Home';
import AreaCreate from '../pages/AreaCreate';
import Profile from '../pages/Profile';

const routerConfig = [
    {
        path: '/',
        element: (<Redirection />),
    },
    {
        path: '/home',
        element: (<Home />),
    },
    {
        path: '/area',
        element: (<AreaCreate />),
    },
    {
        path: '/profile',
        element: (<Profile/>)
    }
];

export const router = createBrowserRouter(routerConfig);

export default { router };
