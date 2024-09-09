import { useState } from "react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>Cart</button>
      {isOpen && (
        <div>
          <h2>Shopping cart</h2>
        </div>
      )}
    </div>
  );
}
