import { useEffect, useState } from "react";

export default function useProducts() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
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

      return [loading, error, products];
}