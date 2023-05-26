import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import App16 from './may16/App16';
// import App17 from './may17/App17';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App19 from './may19/App19';
import Routerserver from './may20/Routerserver';
import { BrowserRouter } from 'react-router-dom';
import App19 from './may19/App19';
import App21 from './may21/App21x1';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App21 />
    {/* <Routerserver /> */}
  </React.StrictMode>
  </BrowserRouter>

  //  <React.StrictMode>
  //    <App19 />
  //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
