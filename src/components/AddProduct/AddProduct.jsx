import Swal from "sweetalert2";

const handleAddProduct = (event) => {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const quality = form.quality.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;

  const newPanjabi = {
    name,
    quantity,
    supplier,
    quality,
    category,
    details,
    photo,
  };

  //   fetch("http://localhost:5000/panjabi", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newCoffee),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  //   console.log(newCoffee);
  // };

  fetch("http://localhost:5000/panjabi", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newPanjabi),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "user added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
};

const AddProduct = () => {
  return (
    <div className="bg-[#f4f3f0] p-24 mb-8">
      <h1 className="font-extrabold text-3xl">add a product</h1>
      <form onSubmit={handleAddProduct}>
        {/* form row */}
        <div className="flex">
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>panjabi name</span>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered w-full max-w-xs "
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>panjabi quantity</span>
              <input
                name="quantity"
                type="text"
                placeholder="availavle quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex">
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>supplier</span>
              <input
                name="supplier"
                type="text"
                placeholder="supplier"
                className="input input-bordered w-full max-w-xs "
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>Quality</span>
              <input
                name="quality"
                type="text"
                placeholder="quality"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex">
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>category</span>
              <input
                name="category"
                type="text"
                placeholder="category"
                className="input input-bordered w-full max-w-xs "
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>details</span>
              <input
                name="details"
                type="text"
                placeholder="details"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex">
          <div className="w-full">
            <label className="form-control w-full ">
              <div className="label"></div>
              <span>photo URL</span>
              <input
                name="photo"
                type="text"
                placeholder="photo URL"
                className="input input-bordered w-full "
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-slate-800 text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
