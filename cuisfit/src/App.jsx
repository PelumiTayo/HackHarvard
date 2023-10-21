import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar/Navbar"
import Blog from "./Blog/Blog"
import Landing from "./Landing/Landing"


function App() {

  return (
    <>
    <Navbar/>
    <Landing/>
    <Blog/>
    </>
  )
}

export default App
