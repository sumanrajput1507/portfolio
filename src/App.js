import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Resume from "./Components/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

const App = () => {
  

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
