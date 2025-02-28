import { useEffect, useState } from "react";
import CollectionCard from "../CollectionCard/CollectionCard";

const AllCollection = () => {
  const [collection, setCollection] = useState([]);
  const [loading , setLoading] = useState(TRUE)

  useEffect(() => {
    fetch("allcollection.json")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {collection.map((item) => (
        <CollectionCard item={item} key={item.id}></CollectionCard>
      ))}
    </div>
  );
};

export default AllCollection;
