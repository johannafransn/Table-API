import { Route, Routes } from "react-router-dom";

import React, { Component, useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const MyContext = React.createContext();

function App() {
  const [userAccountAddress, setUserAccountAddress] = useState("");

  return (
    <main>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
