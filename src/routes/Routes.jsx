import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
// import AddProduct from "../pages/Products";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import AddProducts from "../pages/AddProducts/AddProducts";
import Brands from "../pages/Brands/Brands";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/addProducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
                
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/brands/:brand',
                element: <Brands></Brands>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brand}`)
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)


            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;
