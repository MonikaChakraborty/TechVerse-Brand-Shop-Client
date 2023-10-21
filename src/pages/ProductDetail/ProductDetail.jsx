import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
// import { useState } from "react";
import Swal from 'sweetalert2'
import useAuth from "../../hooks/useAuth";
9

const ProductDetail = ({ product }) => {
  const details = useLoaderData();
  const {user} = useAuth();


  const handleAddToCart = (product) => {
    // console.log(productId);
    console.log(details, user.email);


    const cartItem = {
      userEmail: user.email,
      productDetails: details,
    };
  

    fetch('https://tech-brand-server.vercel.app/cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Product Added To Cart Successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })
  }
  // const { _id , image, name, brand_name, type, price, rating } = product;
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-screen-xl mx-auto mt-24 ">
        <div className="card lg:card-side shadow-xl bg-gradient-to-r from-sky-100 to-blue-300">
          <figure className=" ">
            <img className="lg:w-[1000px] w-[500px] lg:mr-5 lg:ml-5 lg:h-[65vh] object-cover" src={details.image} alt="" />
          </figure>
          <div className="m-16">
            <h2 className="card-title text-2xl mb-3">Product Name: {details.name}</h2>
            <p className="text-lg text-gray-700 font-medium mb-3">{details.type}</p>
            <p className="text-lg text-gray-700 font-bold mb-10">Price: {details.price}</p>
            <p className="lg:text-lg text-gray-600 font-medium mb-16">{details.short_description}</p>
            <div className="card-actions justify-center">
              <button onClick={() => handleAddToCart(details._id)} className="btn bg-sky-600 hover:bg-sky-800 text-white border-none normal-case text-base">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetail;
