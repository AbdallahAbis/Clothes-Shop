import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/Shop/Shop.component";
import SignInAndSignUp from "./pages/Sign-in-sign-up/Sign-in-sign-up.component";
import Header from "./components/Header/Header.component";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
