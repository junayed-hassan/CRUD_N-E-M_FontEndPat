import { createBrowserRouter } from 'react-router-dom';
import Main from '../layOuts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Users from '../pages/Users';

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/users",
                element: <Users/>
            }
        ]
    }
]);

export default router;