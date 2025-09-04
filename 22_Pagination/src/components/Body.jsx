import axios from "axios";
import { useEffect, useState } from "react";

const Body = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((api) => setProduct(api.data))
      .catch((error) => console.error("Failed to fetch products:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading || product.length === 0) {
    return (
      <div className="flex flex-grow justify-center items-center">
        <h1 className="text-3xl">{loading ? "Loading..." : "No products found"}</h1>
      </div>
    );
  }

  return (
    <>
    <header className="flex justify-center bg-black text-white py-4">
      <h1 className="text-3xl font-semibold">PAGINATION</h1>
    </header>
      <div className="flex flex-wrap gap-5 p-5 justify-center ">
        {product.map((p) => (
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
      {/* pagination */}
      <div className="flex justify-center items-center gap-2 py-10">
        <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">←</button>
        <button className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition">1</button>
        <button className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300 transition">2</button>
        <button className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300 transition">3</button>
        <button className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300 transition">4</button>
        <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">→</button>
      </div>
    </>
  );
};

export default Body;
