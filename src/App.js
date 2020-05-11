import React from "react";
import Dashboard from "./pages/Dashboard";
import Console from "./pages/Console";
import Tasks from "./pages/Tasks";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/console" component={Console} />
        <Route exact path="/tasks" component={Tasks} />
      </BrowserRouter>
    </div>
  );
}

export default App;
