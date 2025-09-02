import axios from "axios";
import { useEffect, useState } from "react";

const Body = ({ searchQuery }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((api) => setProduct(api.data))
      .catch((error) => console.error("Failed to fetch products:", error))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = product.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (loading || filteredProducts.length === 0) {
    return (
      <div className="flex flex-grow justify-center items-center">
        <h1 className="text-3xl">{loading ? "Loading..." : "No products found"}</h1>
      </div>
    );
  }


  return (
    <div className="flex flex-grow flex-wrap gap-5 p-5 justify-center ">
      {filteredProducts.map((p) => (
        <div key={p.id} className="w-60 border border-black rounded-md p-5 text-center flex flex-col gap-2 justify-center items-center">
          <img src={p.image} alt={p.title} className="w-20" />
          <h1 className="font-bold text-2xl">{p.title}</h1>
          <p className="bg-yellow-400 p-1">{p.category}</p>
          <p>
            {p.rating.rate} ({p.rating.count})
          </p>
          <p className="font-semibold text-xl">${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
