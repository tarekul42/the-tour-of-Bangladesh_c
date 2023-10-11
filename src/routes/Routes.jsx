import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Testing from "../texting/Testing";
import Destination from "../Pages/Destination/Destination";
import Home from "../Pages/Home/Home";
import Place from "../Pages/News/Place";
import PlaceDescription from "../Pages/PlaceDescription/PlaceDescription";
import Hotels from "../Pages/Hotels/Hotels";
import PrivetRoute from "./PrivetRoute";
import HotelsLayout from "../layouts/HotelsLayout/HotelsLayout";

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
                loader: ({ params }) => fetch(`https://the-tour-of-bangladesh-s-tarekul42s-projects.vercel.app/places/${params.id}`)
            }
        ]
    },
    {
        path: 'destination',
        element: <Destination />,
        children: [
            {
                path: ':id',
                element: <PlaceDescription/>,
                loader: ({params}) => fetch(`https://the-tour-of-bangladesh-s-tarekul42s-projects.vercel.app/places/${params.id}`),
            }
        ]
    },
    {
        path: 'hotels',
        element: <HotelsLayout/>,
        children: [
            {
                path: ':id',
                element: <PrivetRoute><Hotels/></PrivetRoute>,
                loader: ({params}) => fetch(`https://the-tour-of-bangladesh-s-tarekul42s-projects.vercel.app/places/${params.id}`)
            }
        ]
    }
]);

export default router;