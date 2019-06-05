import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Components
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer.js";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
