import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Marginholder from "./components/Navbar/Marginholder";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Marginholder />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/termekek" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
