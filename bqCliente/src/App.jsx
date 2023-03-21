import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";

function App() {
      return (
      <Routes>  
        <Route path= '/' element= {<Login/>} />
        <Route path= '/Home' element= {<Home/>}/>
        </Routes> 
      );
    }
  


export default App;
