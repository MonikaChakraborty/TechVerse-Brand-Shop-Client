import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navbar from "../shared/Navbar";
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
      fetch(`http://localhost:5000/cart/${user.email}`)
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
    <div>
      {/* Render the cart items in the component */}
      {/* <Navbar></Navbar> */}
      <h1 className="text-4xl font-medium text-teal-800 text-center mt-6 mb-10">My Cart Items</h1>
      <div className="grid grid-cols-1 gap-10 mb-16">
      {cartItems.map((item) => (
        // Render each item in the cart
        <CartItems key={item._id} item={item} cartItems={cartItems} setCartItems={setCartItems}></CartItems>
      ))}
      </div>
    </div>
  );
};

export default MyCart;

