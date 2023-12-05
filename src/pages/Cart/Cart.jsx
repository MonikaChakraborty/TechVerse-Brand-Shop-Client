import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
// import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
 
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      // Fetch user's cart items from the server
      fetch(`https://tech-brand-server.vercel.app/cart/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data);
        })

        .catch((error) =>
          console.error("Error fetching user cart items:", error)
        );
    } else {
      navigate(location?.state ? location.state : "/");

    //   Swal.fire({
    //     title: 'Not Logged In',
    //     text: 'Please log in to view your cart.',
    //     icon: 'warning',
    //     confirmButtonText: 'OK',
    //   })
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    {/* <Navbar /> */}

    {/* Main content */}
    <div
      className="bg-gradient-to-r from-teal-600 to-sky-200 flex-1"
      style={{
        minHeight: "calc(100vh - 308px))", // Subtract the height of navbar and footer
      }}
    >
      <h1 className="text-4xl font-medium text-teal-900 text-center pt-4 mb-10">
        My Cart
      </h1>
      <div className="grid grid-cols-1">
        {cartItems.map((item) => (
          // Render each item in the cart
          <CartItems
            key={item._id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></CartItems>
        ))}
      </div>
    </div>

    {/* Footer */}
    {/* <Footer /> */}
  </div>
);
};


export default MyCart;

