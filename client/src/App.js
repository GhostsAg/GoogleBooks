import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
        <Route path={`/saved`} component={Home} />
        <Route path={`/search`} component={Search} />
        <Redirect exact from="/" to="/saved" />
    </Router>
  );
}

export default App;