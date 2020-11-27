import React from "react";

import {Route, Switch  } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/HomeComponent";
import ReportComp from "./components/ReportComponent";
import Signin from "./components/Volunteersignin";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/report'  component={ReportComp}/>
      <Route path='/signin' component={Signin}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
