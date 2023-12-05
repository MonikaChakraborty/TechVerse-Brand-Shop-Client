import { useLoaderData } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";
// import { Carousel } from "keep-react";
"use client";
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
        </div>


        {/* <div className=" w-full h-[80vh]">
          <Carousel slideInterval={5000} showControls={true} indicators={true}>
            <img
              src={image1}
              alt="slider-1"
              height={400}
              width={910}
            />
            <img
              src={image2}
              alt="slider-2"
              height={400}
              width={910}
            />
            <img
              src={image3}
              alt="slider-3"
              height={400}
              width={910}
            />
           
          </Carousel>
        </div> */}




        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl text-center font-medium text-teal-800 mb-8">
            Products
          </h2>
          {/* <h3>products: {loadedProducts.length}</h3> */}

          {loadedProducts.length === 0 ? (
            <div className="flex justify-center"><h1 className="text-4xl font-medium">Sorry! No Products Available of This Brand</h1></div>
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
