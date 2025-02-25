const handleViewDetails = () => {
  console.log('view details card clicked')
}

const CollectionCard = ({ item }) => {
  const { id, name, description, price, image } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
        <p className="absolute top-12 right-12 bg-black text-white px-3 py-1 rounded-lg text-sm">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button onClick={handleViewDetails} className="btn btn-success hover:bg-slate-600">
            View Details
          </button>
          <button className="btn btn-success hover:bg-slate-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
