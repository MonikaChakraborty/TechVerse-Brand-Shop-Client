import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import BrandProducts from "../BrandProducts/BrandProducts";
import image1 from "../../assets/image1.jpg";
// import image2 from "../../assets/image2.jpg";
import image2 from "../../assets/imag2-2.jpg";
import image3 from "../../assets/image3.jpg";

const Brands = () => {
  const loadedProducts = useLoaderData();
  //   if(loadedProducts.length === 0){
  //     <h2>No products</h2>
  //   }
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="mb-16 lg:mb-24">
        {/* slider */}

        <div className="carousel mb-16">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={image1} className="w-full h-screen" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={image2} className="w-full h-screen" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={image3} className="w-full h-screen" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* <div id="slide4" className="carousel-item relative w-full">
            <img
              src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
        </div>


        <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl text-center font-medium text-teal-800 mb-8">Products</h2>
        {/* <h3>products: {loadedProducts.length}</h3> */}

        
        {loadedProducts.length === 0 ? (
          <h1 className="text-4xl font-medium">No Products Available</h1>
        ) : (
          <div className="grid lg:grid-cols-2 gap-16">
            {loadedProducts.map((product) => (
              <BrandProducts
                key={product._id}
                product={product}
              ></BrandProducts>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};


export default Brands;
