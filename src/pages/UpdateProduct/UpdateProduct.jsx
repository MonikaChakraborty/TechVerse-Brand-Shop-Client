import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, image, name, brand_name, type, price, rating } = product;


  const handleUpdateProduct = event => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    // const short_description = form.short_description.value;

    const updatedProduct = {image, name, brand_name, type, price, rating}
    console.log(updatedProduct);

    // console.log(newProduct);


    // send data to server
    fetch(`https://tech-brand-server.vercel.app/update/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Product Updated Successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        form.reset();
    })

}
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="bg-teal-100 p-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-800">
          Update Product : {name}
        </h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form row 1*/}
          <div className="md:flex mb-8">
            <div className="form-control md: w-1/2">
              <label className="label">
                <span className="label-text text-lg">Image</span>
              </label>
              <label className="input-group">
                {/* <span>Name</span> */}
                <input
                  type="text"
                  name="image" defaultValue={image}
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name" defaultValue={name}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row 2*/}
          <div className="md:flex mb-8">
            <div className="form-control md: w-1/2">
              <label className="label">
                <span className="label-text text-lg">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand_name" defaultValue={brand_name}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-lg">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type" defaultValue={type}
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row 3 */}
          <div className="md:flex mb-16">
            <div className="form-control md: w-1/2">
              <label className="label">
                <span className="label-text text-lg">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price" defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-lg">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating" defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row 4 */}
          {/* <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="short_description"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div> */}

          <input
            type="submit" 
            value="Update"
            className="btn btn-block bg-teal-600 text-white hover:bg-teal-800 normal-case text-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
