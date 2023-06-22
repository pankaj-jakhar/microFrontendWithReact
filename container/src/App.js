import React, { memo, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import "./App.css";

const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#128571; Cats and Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
    </div>
  );
}

const Dogs = memo(()=> <MicroFrontend host={dogsHost} name="Dogs" test={"test"} />);
const Cats = memo(()=> <MicroFrontend host={catsHost} name="RandomCats" />);


function GreetingCat() {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend host={catsHost} name="Cats" />
      </div>
    </div>
  );
}

function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/cat/${input}`);
  };
  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
        <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            <Dogs  />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/*" element={<GreetingCat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;