import axios from "axios";
import { useEffect, useState } from "react";

const Body = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const api = await axios.get("https://fakestoreapi.com/products");
      const res = api.data;
      console.log(res);
      setProduct(res);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center ">
      {product.map((p) => (
        <div key={p.id} className="w-60 border border-black rounded-md p-5 text-center flex flex-col gap-2 justify-center items-center">
          <img src={p.image} alt="" className="w-20" />
          <h1 className="font-bold text-2xl">{p.title}</h1>
          <p className="bg-yellow-400 p-1">{p.category}</p>
          <p>
            {p.rating.rate}
            ({p.rating.count})
          </p>
          <p className="font-semibold text-xl">${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
