import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Calculator from "./Calculator/Calculator";
import HomePage from "./CRUD/HomePage/HomePage";
import UpdateUser from "./CRUD/FormElement/UpdateUser";
import NewUser from "./CRUD/FormElement/NewUser";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  const routes = (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Portfolio />
      <Contact />
    </>
  );

  return (
    <div className="app-container">
      <Router basename="/Akash-Portfolio">
        <Routes>
          <Route path="/" element={routes} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/CRUD_operation" element={<HomePage />} />
          <Route path="/user/:userId" element={<UpdateUser />} />
          <Route path="/add" element={<NewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
