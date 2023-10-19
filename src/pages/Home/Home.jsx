import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import BrandCards from "./BrandCards";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="max-w-screen-xl mx-auto mb-24">
        <h2 className="text-4xl mb-8 text-center text-teal-700 font-medium">Brands</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {brands.map((brand) => (
            <BrandCards key={brand.brand_name} brands={brand}></BrandCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
