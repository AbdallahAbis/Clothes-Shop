import React, { Component } from "react";

import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../Custom-button/Custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./Sign-up.styles.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I Don't Have An Account</h2>
        <span className="subtitle">Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Full Name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            autoComplete="username"
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            autoComplete="new-password"
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            autoComplete="new-password"
            label="Confirm Your Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
