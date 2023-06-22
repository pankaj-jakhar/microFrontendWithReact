import React, { useState, useEffect } from "react";
import "./App.css";

function App(rest) {
  const [dogImg, setDogImg] = useState('');
  // const [test, renderMicroFrontend] = rest||[];
  const fetchDoggo = () => {
    setDogImg('');
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      
        
      });
  };


  useEffect(() => {
    if (dogImg === null) {
      fetchDoggo();
    }
  });

  return (
    <div>
      <header>
        <h3>{rest?.test}</h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Dogg</button>
        </div>
        {dogImg !== "" ? (
          <div>
            <img src={dogImg} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;
