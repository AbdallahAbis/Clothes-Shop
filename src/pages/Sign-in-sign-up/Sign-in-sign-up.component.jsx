import React from "react";
import SignIn from "../../components/Sign-in/Sign-in.component";
import SignUp from "../../components/Sign-up/Sign-up.component";

import {SignInSignUpPageContainer} from './Sign-in-sign-up.styles'

const SignInAndSignUp = () => {
  return (
    <SignInSignUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpPageContainer>
  );
};

export default SignInAndSignUp;
