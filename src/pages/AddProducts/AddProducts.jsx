import Navbar from "../shared/Navbar";

const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;

        const newProduct = {image, name, brand_name, type, price, rating, short_description}
        console.log(newProduct);

        // console.log(newProduct);


        // send data to server
        fetch('https://tech-brand-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })

    }
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="bg-gradient-to-r from-teal-600 to-sky-200 p-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-800">Add product</h2>
        <form onSubmit={handleAddProduct}>

          {/* form row 1*/}
          <div className="md:flex mb-5">
            <div className="form-control md: w-1/2">
              <label className="label">
                <span className="label-text text-lg">Image</span>
              </label>
              <label className="input-group">
                {/* <span>Name</span> */}
                <input
                  type="text"
                  name="image"
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
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

            {/* form row 2*/}
            <div className="md:flex mb-5">
            <div className="form-control md: w-1/2">
              <label className="label">
                <span className="label-text text-lg">Brand Name</span>
              </label>
              <label className="input-group">
                
                <input
                  type="text"
                  name="brand_name"
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
                  name="type"
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


            {/* form row 3 */}
            <div className="md:flex mb-5">
            <div className="form-control md: w-1/2">
              <label className="label">
                <span className="label-text text-lg">Price</span>
              </label>
              <label className="input-group">
                
                <input
                  type="text"
                  name="price"
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
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>



            {/* form row 4 */}
            <div className="mb-8">
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

          </div>

          <input type="submit" value="Add Product" className="btn border-none bg-sky-200 text-gray-600 hover:bg-teal-800 hover:text-white normal-case text-base " />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
