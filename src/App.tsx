import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import AboutPage from "./pages/AboutPage";
import { Provider } from "react-redux";
import store from "./store/storeConfigure";

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoListPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
