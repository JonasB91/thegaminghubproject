import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import GameGrid from "./components/GameGrid";


function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <GameGrid/>
    </>
  )
}

export default App
