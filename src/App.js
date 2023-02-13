import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import News from "./Components/News/News.js";
// api key = ea4eb1b5480848ad8f99134504578f85

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
  