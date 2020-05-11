import React from "react";
import Dashboard from "./pages/Dashboard";
import Console from "./pages/Console";
import Tasks from "./pages/Tasks";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/console" component={Console} />
        <Route exact path="/tasks" component={Tasks} />
      </HashRouter>
    </div>
  );
}

export default App;
