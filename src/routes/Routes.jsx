import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Testing from "../texting/Testing";
import News from "../Pages/News/News";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <News/>,
        children: [
            {
                path: 'destination',
                element: <Destination/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'testing',
                element: <Testing/>
            }
        ]
    }
]);

export default router