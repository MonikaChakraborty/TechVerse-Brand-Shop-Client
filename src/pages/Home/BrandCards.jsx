import { Link } from "react-router-dom";

const BrandCards = ({ brands }) => {
  const { brand_name, image } = brands;
  return (
    <Link to={`/brands/${brand_name}`}>
    <div className="card bg-gradient-to-r from-sky-200 to-teal-600 shadow-xl ">
      <figure>
        <img className="w-full lg:h-[50vh] object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-teal-700">{brand_name}</h2>
        
      </div>
    </div>
    </Link>
  );
};

export default BrandCards;
