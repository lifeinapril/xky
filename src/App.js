import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import HeadBar from "./components/Bars/HeadBar";
import app from "./Config";
import "./App.css";
import Foot from "./components/Bars/Foot";
import Collections from "./pages/Collections";
import Item from "./pages/Item";
import Result from "./pages/Result";
import Policy from "./pages/Policy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bar from "./components/Bars/Bar";

const App =function() {

    return (
        <Router>
          <HeadBar dark={true} icon={app.icon} />
           <Bar>Get same day delivery within Lagos & Abuja</Bar>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/policies/:term" element={<Policy />} />
            <Route path="/result/:term" element={<Result />} />
          </Routes>
          <Foot contacts={app.contacts} address={app.address} policies={app.policies} bg="bg-dark" name={app.name} icon={app.icon}/>      
        </Router>
    );
}

export default App;
