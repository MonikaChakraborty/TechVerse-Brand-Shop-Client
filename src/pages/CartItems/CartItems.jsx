import Swal from "sweetalert2";

const CartItems = ({ item, cartItems, setCartItems }) => {
  const { _id, productDetails } = item;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        
        fetch(`https://tech-brand-server.vercel.app/cart/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");

              const remaining = cartItems.filter(cart => cart._id !== _id);
              setCartItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-sky-100 pb-4 rounded-lg shadow-md">
        <figure>
          <img
            className="w-[500px]  bg-cover object-cover rounded-b-md mb-4"
            src={productDetails.image}
            alt={productDetails.name}
          />
        </figure>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">{productDetails.name}</h2>
          <p className="text-gray-500 mb-2">{productDetails.brand_name}</p>
          <p className="text-gray-500 mb-2">{productDetails.type}</p>
          <p className="text-gray-700 font-bold mb-2">{productDetails.price}</p>
          <div className="flex justify-center items-center">
            <p className="text-yellow-500 text-lg">
              {productDetails.rating} stars
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
