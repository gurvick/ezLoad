import React from 'react'
import {
  SignupContainer,
  SignupForm,
  SignupFormButton,
  SignupFormContent,
  SignupFormH1,
  SignupFormInput,
  SignupFormLabel,
  SignupFormWrap,
  SignupIcon,
} from './SignupElements'

const SignUp = () => {
  return (
    <>
      <SignupContainer>
        <SignupFormWrap>
          <SignupIcon to='/'>ezLoad</SignupIcon>
          <SignupFormContent>
            <SignupForm action='#'>
              <SignupFormH1>Sign in to your account</SignupFormH1>
              <SignupFormLabel htmlFor='for'>Email</SignupFormLabel>
              <SignupFormInput type='email' required />
              <SignupFormLabel htmlFor='for'>Password</SignupFormLabel>
              <SignupFormInput type='password' required />
              <SignupFormButton type='submit'>Create Account</SignupFormButton>
            </SignupForm>
          </SignupFormContent>
        </SignupFormWrap>
      </SignupContainer>
    </>
  )
}

export default SignUp
