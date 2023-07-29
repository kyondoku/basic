import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      }).catch(e=> setError('에러가 발생했음!'))
      .finally(()=> setLoading(false))
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, []); // 2번째 인자에 빈 배열 전달하면 컴포넌트가 최초로 보여질때(마운트될때)만 호출됨

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
