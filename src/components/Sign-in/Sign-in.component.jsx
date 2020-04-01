import React from "react";
import { connect } from "react-redux";

import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../Custom-button/Custom-button.component";

import { emailSingInStart } from "../../redux/user/user.actions";

import { googleSingInStart } from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./Sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSingInStart } = this.props;
    const { email, password } = this.state;

    emailSingInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSingInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            autoComplete="username"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            autoComplete="new-password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSingInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: (email, password) =>
    dispatch(emailSingInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
