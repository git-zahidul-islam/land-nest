import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/home/Home";
import Error from "../pages/error/Error";
import AboutUs from "../pages/aboutUs/AboutUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
        ]
    },
]);
