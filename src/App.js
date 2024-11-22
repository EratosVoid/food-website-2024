import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OrderCustomization from "./components/OrderCustomization";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import Feedback from "./components/Feedback";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderCustomization />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
