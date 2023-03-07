import logo from './logo.svg';
import './App.css';

function AppJSX() {

  const name = 'kyondoku';
  const list = ['우유', '딸기', '바나나', '요거트'];

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>

  )
}

// 1. 컴포넌트는 하나의 태그로 반환해야한다.
// 2. class (x) -> className(o)
// 3. 자바스크립트 코드 작성이 가능함 -> 변수에 접근 가능 {name}

export default AppJSX;
