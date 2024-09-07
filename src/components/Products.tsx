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
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              className="w-[50px] h-[50px]"
              src={product.image}
              alt={product.title}
            />
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
