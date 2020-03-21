import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/Shop/Shop.component";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
