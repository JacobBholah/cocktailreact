import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import Cocktails from "./Cocktails";
import Addcocktail from "./Addcocktail";
import Glasses from "./Glasses";
import Equipment from "./Equipment";
import Ingredients from "./Ingredients";
import Garnishes from "./Garnishes";

class Page extends React.Component {
  render() {
    return (
      <Router>
        <div class="links">
          <a class="active" href="/">
            Home
          </a>
          <a href="/cocktails">Cocktails</a>
          <a href="/equipment">Equipment</a>
          <a href="/ingredients">Ingredients</a>
          <a href="/garnishes">Garnishes</a>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div id = "header">
                <div>
                  <h1>Add A Cocktail</h1>
                </div>
                <div>
                  <Addcocktail />
                </div>
              </div>
            }
          />

          <Route
            path="/cocktails"
            element={
              <div id="header">
                <div>
                  <h1>Cocktails</h1>
                </div>
                <div>
                  <Cocktails />
                </div>
              </div>
            }
          />

          <Route
            path="/equipment"
            element={
              <div id="header">
                <div>
                  <h1>Equipment</h1>
                </div>
                <div id="glasses">
                  <h2>Glasses</h2>
                </div>
                <div id="glassesapi">
                <Glasses />
                </div>
                <div id="tools">
                  <h2>Tools</h2>
                </div>
                <div id="equipment">
                <Equipment />
                </div>
              </div>
            }
          />

          <Route
            path="/ingredients"
            element={
              <div id="header">
                <div>
                  <h1>Ingredients</h1>
                </div>
                <div id="ingredients">
                <Ingredients />
                </div>
              </div>
            }
          />

          <Route
            path="/garnishes"
            element={
              <div id="header">
                <div>
                  <h1>Garnishs</h1>
                </div>
                <div id="garnishes">
                <Garnishes />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));
