import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {

  const [loading, error, products] = useProducts();
  const [count, setCount] = useState(0);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
