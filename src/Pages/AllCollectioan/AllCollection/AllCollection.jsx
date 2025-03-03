// import { useEffect, useState } from "react";
// import CollectionCard from "../CollectionCard/CollectionCard";
import { useLoaderData } from "react-router";
import PanjabiCard from "../../../components/PanjabiCard/PanjabiCard";

const AllCollection = () => {
  const panjabis = useLoaderData();
  // const [collection, setCollection] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("allcollection.json")
  //     .then((res) => res.json())
  //     .then((data) => setCollection(data));
  // }, []);
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {collection.map((item) => (
          <CollectionCard item={item} key={item.id}></CollectionCard>
        ))}
      </div> */}
      <h1 className="text-3xl text-yellow-700 text-center">premium panjabi </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 m-20">
        {panjabis.map((panjabi) => (
          <PanjabiCard key={panjabi._id} panjabi={panjabi}></PanjabiCard>
        ))}
      </div>
    </div>
  );
};

export default AllCollection;
