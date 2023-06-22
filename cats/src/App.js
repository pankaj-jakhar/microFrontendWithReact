import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomCat />} />
        <Route path="/cat/" element={<RandomCat />} />
        <Route path="/cat/:greeting" element={<GreetingCat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;