const BrandProducts = ({product}) => {

    const {image, name, brand_name, type, price, rating } = product;
  return (
    <div className="card card-side bg-blue-100 shadow-xl">
      <figure className="bg-white">
        <img className="w-full h-[50vh] object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="m-8 text-teal-900">
        <h2 className="card-title mb-2">Name: {name}</h2>
        <h2 className="mb-10 font-medium">Brand Name: {brand_name}</h2>
        <p className="mb-2">Type: {type}</p>
        <p className="mb-2">Price: {price}</p>
        <p className="">Rating: {rating}</p>
        <div className="mt-8 flex gap-4">
          <button className="btn bg-teal-300">Details</button>
          <button className="btn bg-orange-300">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
