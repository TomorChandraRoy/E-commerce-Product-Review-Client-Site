import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../layout/mainLayOut/MainLayOut";
import Error from "../../pages/error/Error";
import Home from "../../pages/homePage/Home";

import SignIn from "../../pages/signIn/SignIn";
import SignUp from "../../pages/signUp/SignUp";
import Product from "../../pages/products/Product";
import ProductsDetails from "../../pages/products/ProductsDetails";


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
                element: <Product/>,
            },
            {
                path: "/allproducts/:id",
                element: <ProductsDetails/>,
                loader: ({params})=>fetch(`http://localhost:5000/allproducts/${params.id}`)
            },
            {
                path: "/contact",
                element: <h3>contact page</h3>
            },
            {
                path: "/signin",
                element: <SignIn/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
           

        ],
    },
]);