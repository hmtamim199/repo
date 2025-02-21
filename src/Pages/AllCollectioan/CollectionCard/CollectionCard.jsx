const CollectionCard = ({ item }) => {
  const { id, name, description, price, image } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-success hover:bg-slate-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
