import { useState, useEffect } from "react";
import { URL } from "../data/url";
import { Product } from "../interfaces/interfaesProducts";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }

        return res.json();
      })
      .then((json: Product[]) => {
        console.log(json);
        return setProducts(json);
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <div className="max-w-[1400px]">
      <ul className="flex flex-wrap gap-5">
        {products.map((product) => (
          <li key={product.id} className="p-5 w-[250px] flex flex-col gap-5 border-2">
            <img
              className="w-[250px] h-[250px]"
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <h4>{product.price}$</h4>
            <button className="bg-blue-500 hover:bg-blue-700">Buy now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
