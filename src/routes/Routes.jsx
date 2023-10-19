import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
// import AddProduct from "../pages/Products";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import AddProducts from "../pages/AddProducts/AddProducts";
import Brands from "../pages/Brands/Brands";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

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
                path: '/brands/:brand',
                element: <Brands></Brands>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brand}`)
            },
            {
                path: '/products/:id',
                element: <ProductDetail></ProductDetail>,
                // loader: ({params}) => fetch(`http://localhost:5000/products/${_id}`)


            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;
