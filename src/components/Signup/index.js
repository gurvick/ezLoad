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
              <SignupFormH1>Sign up for an account</SignupFormH1>
              <SignupFormLabel htmlFor='for'>Email</SignupFormLabel>
              <SignupFormInput type='email' required />
              <SignupFormLabel htmlFor='for'>Password</SignupFormLabel>
              <SignupFormInput type='password' required />
              <SignupFormLabel htmlFor='for'>Verify Password</SignupFormLabel>
              <SignupFormInput type='password' required />
              <SignupFormLabel htmlFor='for'>Phone Number</SignupFormLabel>
              <SignupFormInput type='tel' required />
              <SignupFormLabel htmlFor='for'>Display Name</SignupFormLabel>
              <SignupFormInput type='text' />
              <SignupFormButton type='submit'>Create Account</SignupFormButton>
            </SignupForm>
          </SignupFormContent>
        </SignupFormWrap>
      </SignupContainer>
    </>
  )
}

export default SignUp
