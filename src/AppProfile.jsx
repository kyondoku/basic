import './App.css';
import Profile from './components/Profile';

function AppProfile() {

    return (
    <>
      <Profile/>
      <Profile/>
      <Profile/>
    </>

  )
}

// 1. 컴포넌트는 하나의 태그로 반환해야한다.
// 2. class (x) -> className(o)
// 3. 자바스크립트 코드 작성이 가능함 -> 변수에 접근 가능 {name}

export default AppProfile;
