import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RandomCat from './RandomCat';
import { createPortal } from 'react-dom';

let rootCats;
window.renderCats = (containerId) => {
    console.log("🚀 ~ file: index.js:10 ~ containerId:", containerId,rootCats)
    rootCats= ReactDOM.createRoot(document.getElementById(containerId));
    rootCats
    .render(<React.StrictMode>
    <App />
  </React.StrictMode>
  );
};

window.unmountCats = containerId => {
  console.log("i m done", containerId,rootCats)
  if(rootCats){
    rootCats.unmount();
    rootCats = undefined;
  }
};

// if (!document.getElementById('Cats-container')) {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<React.StrictMode>
//     <App />
//   </React.StrictMode>);
// }

let rootRandomCats;
window.renderRandomCats = (containerId) => {
  console.log("🚀 ~ file: index.js:30 ~ containerId:", containerId)
  rootRandomCats= ReactDOM.createRoot(document.getElementById(containerId));
  rootRandomCats.render(<React.StrictMode>
    <RandomCat />
  </React.StrictMode>);
};

window.unmountRandomCats = containerId => {
  console.log("i m done", containerId,rootRandomCats)
  if(rootRandomCats){
    rootRandomCats.unmount();
  }
};


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
