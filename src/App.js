import React from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import ImageUpload from "./ImageUpload";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Application from "./Application";
/* import Carousel from "react-bootstrap/esm/Carousel"; */
import Carousel from "./Carousel"

function App() {
  return (
    <Router>
    <div className="app">
         <Header />
   
    <Route path="/" exact  component={Form }/>
    <Route path="/application" component={Application} />
    <Route path="/carousel" component={Carousel} />
    </div> 
    </Router>
   
  );
}

export default App;
