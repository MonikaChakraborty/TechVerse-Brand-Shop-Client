import { Link } from "react-router-dom";

const BrandProducts = ({ product }) => {
  const { _id, image, name, brand_name, type, price, rating } = product;
  return (
    <div className="card  lg:card-side bg-sky-100 shadow-xl">
      <figure className="bg-white">
        <img className="w-full lg:h-[50vh] object-cover" src={image} alt="" />
      </figure>
      <div className="m-8">
        <h2 className="text-lg text-gray-700 font-medium mb-2">Name: {name}</h2>
        <h2 className="mb-10 text-gray-500 font-medium">Brand: {brand_name}</h2>
        <p className="mb-2 text-gray-500">{type}</p>
        <p className="mb-2 text-gray-700 font-medium">Price: {price}</p>
        <p className="text-yellow-500 text-lg">{rating} stars</p>
        <div className="mt-8 flex gap-4">
          <Link to={`/products/${_id}`}>
            <button className="btn text-white text-base bg-teal-500 hover:bg-teal-800 normal-case">Details</button>
          </Link>

          <Link to={`/updateProduct/${_id}`}>
            <button className="btn text-white text-base bg-orange-400 hover:bg-orange-700 normal-case">Update</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
