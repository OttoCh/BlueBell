import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Homepage from './Homepage/Homepage';
// import HomeHeader from './Homepage/HomeHeader';
// import MainPage from './Main/main';
// import App from './Main/materialtest';
// import Main from './material/main';
import Main from './module/mainpage';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomeHeader></HomeHeader> */}
    {/* <Homepage></Homepage> */}
    {/* <MainPage></MainPage> */}
    {/* <App></App> */}
    <Main></Main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
