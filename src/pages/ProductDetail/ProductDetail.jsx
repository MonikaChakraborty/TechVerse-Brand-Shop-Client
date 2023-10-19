import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";

const ProductDetail = ({ product }) => {
  const loadedProducts = useLoaderData();
  // const { _id , image, name, brand_name, type, price, rating } = product;
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-screen-xl mx-auto mt-16">
        <div className="card card-side shadow-xl bg-sky-100">
          <figure className=" ">
            <img className="w-[1000px] mr-5 ml-5 h-[60vh] object-cover" src={loadedProducts.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product Name: {loadedProducts.name}</h2>
            <p className="text-lg">{loadedProducts.type}</p>
            <p className="text-lg">Price: {loadedProducts.price}</p>
            <p className="text-lg text-gray-600 font-medium">{loadedProducts.short_description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
