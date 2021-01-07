import React, { useState, useContext } from 'react'
import {
  SignupContainer,
  SignupForm,
  SignupFormContent,
  SignupFormH1,
  SignupFormInput,
  SignupFormLabel,
  SignupFormWrap,
  SignupIcon,
  SignupFormButton,
} from './SignupElements'
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import ErrorNotice from '../misc/ErrorNotice'

export default function SignUp() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordCheck, setPasswordCheck] = useState()
  const [phoneNum, setPhoneNum] = useState()
  const [displayName, setDisplayName] = useState()
  const [error, setError] = useState()

  const { setUserData } = useContext(UserContext)
  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault()

    try {
      const newUser = { email, password, passwordCheck, phoneNum, displayName }
      await Axios.post('http://localhost:5000/users/register', newUser)
      const loginRes = await Axios.post('http://localhost:5000/users/login', {
        email,
        password,
      })
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      })
      localStorage.setItem('auth-token', loginRes.data.token)
      history.push('/')
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }
  return (
    <>
      <SignupContainer>
        <SignupFormWrap>
          <SignupIcon to='/'>ezLoad</SignupIcon>
          <SignupFormContent>
            <SignupForm action='#'>
              <SignupFormH1>Sign up for an account</SignupFormH1>
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <SignupFormLabel htmlFor='for'>Email</SignupFormLabel>
              <SignupFormInput
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SignupFormLabel htmlFor='for'>Password</SignupFormLabel>
              <SignupFormInput
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <SignupFormLabel htmlFor='for'>Verify Password</SignupFormLabel>
              <SignupFormInput
                type='password'
                onChange={(e) => setPasswordCheck(e.target.value)}
                required
              />
              <SignupFormLabel htmlFor='for'>Phone Number</SignupFormLabel>
              <SignupFormInput
                type='tel'
                onChange={(e) => setPhoneNum(e.target.value)}
                required
              />
              <SignupFormLabel htmlFor='for'>Display Name</SignupFormLabel>
              <SignupFormInput
                type='text'
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <SignupFormButton type='submit' onClick={submit}>
                Create Account
              </SignupFormButton>
            </SignupForm>
          </SignupFormContent>
        </SignupFormWrap>
      </SignupContainer>
    </>
  )
}
