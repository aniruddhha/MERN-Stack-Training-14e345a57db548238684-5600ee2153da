import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MoreBasics1 from './MoreBasics1';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const jsx = <React.StrictMode>
  <MoreBasics1 />
</React.StrictMode>

const root = document.getElementById('root')

ReactDOM.render(jsx, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
