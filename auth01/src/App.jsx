

import { Routes, Route } from "react-router-dom"
import Navabar from "./components/Navabar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import axios from 'axios'

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true;

function App() {

  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>


      </Routes>
    </>
  )
}

export default App
