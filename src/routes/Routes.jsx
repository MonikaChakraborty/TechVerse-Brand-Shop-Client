import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
// import AddProduct from "../pages/Products";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import AddProducts from "../pages/AddProducts/AddProducts";
import Brands from "../pages/Brands/Brands";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/addProducts',
                element: <AddProducts></AddProducts>
                
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/products/:brand',
                element: <Brands></Brands>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;
