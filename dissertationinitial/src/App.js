import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApexCharts from "apexcharts";
import Home from "./pages/Home";
import FirstPageTest from "./pages/FirstPageTest";
import Chart from "react-apexcharts";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Question820 from "./pages/Question820";
import ChangeInAttitude from "./pages/ChangeInAttitude";

const TITLE = 'The Tester!'

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
            <Route path="/FirstPageTest">
              <FirstPageTest />
            </Route>
            <Route path="/Question820">
              <Question820 />
            </Route>
            <Route path="/ChangeInAttitude">
              <ChangeInAttitude />
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
