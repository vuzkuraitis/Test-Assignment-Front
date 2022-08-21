import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Add from "./pages/Add";

const Router = () => {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
