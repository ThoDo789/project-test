import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./components/Context";
import Header from "./components/Header";
import Section from "./components/Section";
class App extends Component {
  render() {
   
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
