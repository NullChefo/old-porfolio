import "./App.css";

import {  Route , Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/userControl/Login";
import Footer from "./components/Footer";

import Register from "./pages/userControl/Register";
import ResetPassword from "./pages/userControl/ResetPassword";

import Applications from "./pages/Applications";
import Experience from "./pages/Experience";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {

  return (
    <>

      
        <div className="container">
          <NavBar />
         
        </div>

        <div className="">
        <Routes>
         <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>

        <Footer />
      


    </>
  );
}

export default App;
