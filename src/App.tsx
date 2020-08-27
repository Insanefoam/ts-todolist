import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TodoListPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
