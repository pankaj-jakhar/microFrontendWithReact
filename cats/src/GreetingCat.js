import React from "react";
import { useParams } from 'react-router';
export default function GreetingCat(props) {
  const  greeting = "asdf" ;
  const greetingCatUrl = `https://cataas.com/cat/says/${useParams().greeting}`;

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!greeting ? (
          <div>Needs a greeting</div>
        ) : (
          <div>
            <img src={greetingCatUrl} width="400px" alt="Cat" />
          </div>
        )}
      </header>
    </div>
  );
}