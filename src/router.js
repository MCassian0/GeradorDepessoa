import React, { Component } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import App from "./App";
import Inicio from "./inicio";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
