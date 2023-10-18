const BrandCards = ({ brands }) => {
  const { brand_name, image } = brands;
  return (
    <div className="card bg-teal-800 shadow-xl ">
      <figure>
        <img className="w-full h-[50vh] object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl text-teal-200">{brand_name}</h2>
        
      </div>
    </div>
  );
};

export default BrandCards;
