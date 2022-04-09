import { Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [userAccountAddress, setUserAccountAddress] = useState("");

  return (
    <body className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </body>
  );
}

export default App;
