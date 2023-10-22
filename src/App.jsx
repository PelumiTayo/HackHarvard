import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Blog from "./Blog/Blog";
import Landing from "./Landing/Landing";
import Tracker from "./Tracker/Tracker";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/community" element={<Blog />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
