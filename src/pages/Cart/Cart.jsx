import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

      Swal.fire({
        title: 'Not Logged In',
        text: 'Please log in to view your cart.',
        icon: 'warning',
        confirmButtonText: 'OK',
      })
    }
  }, [user]);

  return (
    <div>
      {/* Render the cart items in the component */}
      <Navbar></Navbar>
      {cartItems.map((item) => (
        // Render each item in the cart
        <div key={item._id}>
          {/* Display relevant information for each cart item */}
          <p>{item._id}</p>

          <p>{item.productDetails.name}</p>
          <p>{item.productDetails.brand_name}</p>

          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default MyCart;
