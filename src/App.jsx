import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer.jsx";
import Food from "./Components/Food.jsx";

function App() {

  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  );
}

export default App;
