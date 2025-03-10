import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LpthApp from './LpthApp';
import reportWebVitals from './reportWebVitals';
import LpthUseState from './components/LpthUseState';
import LpthUseStateListObject from './components/LpthUseStateListObject';

const lpthRoot = ReactDOM.createRoot(document.getElementById('lpthRoot'));
lpthRoot.render(
  <React.StrictMode>
    <LpthApp />
    <LpthUseState />
    <LpthUseStateListObject />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
