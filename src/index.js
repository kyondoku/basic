import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppTheme from './AppTheme';
// import AppForm from './AppForm';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
import AppProducts from './basic/AppProducts';
// import AppXY from './AppXY';
// import AppMentor from './AppMentor';
// import AppMentors from './AppMentors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProducts/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
