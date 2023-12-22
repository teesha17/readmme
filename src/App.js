import React from "react";
import Rout from "./Rout";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
