//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {

  const [data, setDate] = useState();

  useState(() => {
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(
        (result) => {
          setDate(result);
        },
        (error) =>{
          
        }
      )
  })
  return (
    <div>
      <Signup/>
    </div>
  );
}

export default App;
