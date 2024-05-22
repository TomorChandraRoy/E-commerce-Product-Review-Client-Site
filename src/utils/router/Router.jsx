import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../layout/mainLayOut/MainLayOut";
import Error from "../../pages/error/Error";
import Home from "../../pages/homePage/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products",
                element: <h2>Produts page</h2>
            },
            {
                path: "/contact",
                element: <h3>contact page</h3>
            },

        ],
    },
]);