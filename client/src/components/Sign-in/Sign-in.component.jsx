import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../Custom-button/Custom-button.component";

import { emailSignInStart } from "../../redux/user/user.actions";

import { googleSignInStart } from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./Sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          autoComplete="username"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          autoComplete="new-password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
