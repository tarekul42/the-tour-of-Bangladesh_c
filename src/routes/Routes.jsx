import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Testing from "../texting/Testing";
// import Destination from "../Pages/Destination/Destination";
// import Blog from "../Pages/Blog/Blog";
// import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Place from "../Pages/News/Place";
import PlaceDescription from "../Pages/PlaceDescription/PlaceDescription";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/places/1' />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'testing',
                element: <Testing />
            }
        ]
    },
    {
        path: 'places',
        element: <Home />,
        children: [
            {
                path: ':id',
                element: <Place />,
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
            }
        ]
    },
    // {
    //     path: 'destination',
    //     element: <Destination />,
    //     children: [
    //         {
    //             path: ':id',
    //             element: <PlaceDescription/>,
    //             loader: ({params})
    //         }
    //     ]
    // },
    // {
    //     path: '/',
    //     element: <Home />,
    //     children: [
    //         {
    //             path: 'places',
    //             element: <Place />,
    //             loader: ({ params }) => fetch('http://localhost:5000/places')
    //         },
    //         {
    //             path: 'blog',
    //             element: <Blog />
    //         },
    //         {
    //             path: 'contact',
    //             element: <Contact />
    //         }
    //     ]
    // },
]);

export default router