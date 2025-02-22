const AddProduct = () => {
  return (
    <div className="bg-[#f4f3f0] p-24 mb-8">
      <h1 className="font-extrabold text-3xl">add a product</h1>
      <form>
        {/* form row */}
        <div className="flex">
          <div className="md:w-1/2">
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <span>coffee name</span>
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
              <span>coffee quantity</span>
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
              <span>taste</span>
              <input
                name="taste"
                type="text"
                placeholder="taste"
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
