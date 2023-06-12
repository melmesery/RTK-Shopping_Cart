import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={1500} />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
