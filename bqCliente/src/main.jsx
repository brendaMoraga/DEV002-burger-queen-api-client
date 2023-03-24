import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./login.css";


// import Login from "./Login";
// import Home from "./Home";
// import ProductList from "./Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
  <App/>
</BrowserRouter>
 </React.StrictMode>,
);
