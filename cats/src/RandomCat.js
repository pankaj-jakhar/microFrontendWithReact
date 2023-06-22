import React, { useState, useEffect } from "react";

export default function RandomCat() {
  const [randomCatImg, setRandomCatImg] = useState('');

  const fetchRandomCat = () => {
    setRandomCatImg("https://cataas.com/cat?"+Math.random());
  };

  useEffect(() => {
    if (randomCatImg === null) {
      fetchRandomCat();
    }
  });

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div>
        {randomCatImg !== "" ? (
          <div>
            <img src={randomCatImg} width="400px" alt="Cat" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}
