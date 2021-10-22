import React from "react";
import logo from './logo.svg';
import './App.css';
import ApexCharts from 'apexcharts'
import Home from "./pages/Home";
import firstPageTest from "./pages/firstPageTest"
import Chart from "react-apexcharts"
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route exact path="/">
            <firstPageTest />
          </Route>
        </Switch>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </div>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
