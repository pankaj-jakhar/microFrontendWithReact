import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rootDogs;

window.renderDogs = (containerId,rest ) => {
    console.log("🚀 ~ file: index.js:10 ~ rest:", rest)
    rootDogs = ReactDOM.createRoot(document.getElementById(containerId));
  rootDogs.render(<React.StrictMode>
      <App {...rest} />
    </React.StrictMode>
    );
  };
  
  window.unmountDogs = containerId => {
    if(rootDogs){
      rootDogs.unmount();
      rootDogs = undefined;
    }
  };
  
  // if (!document.getElementById('Cats-container')) {
  //   const root = ReactDOM.createRoot(document.getElementById("root"));
  //   root.render(<React.StrictMode>
  //     <App />
  //   </React.StrictMode>);
  // }


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
