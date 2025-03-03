const PanjabiCard = ({ panjabi }) => {
  const { name, quantity, supplier, quality, category, details, photo } =
    panjabi;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <button className="btn  bg-slate-600 text-white">Buy Now</button>
          <button className="btn  bg-slate-600 text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PanjabiCard;
