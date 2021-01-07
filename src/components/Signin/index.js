import React, { useState, useContext } from 'react'
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './SigninElements'
import { useHistory } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import ErrorNotice from '../misc/ErrorNotice'

export default function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const { setUserData } = useContext(UserContext)
  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault()
    try {
      const loginUser = { email, password }
      const loginRes = await Axios.post(
        'http://localhost:5000/users/login',
        loginUser
      )
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
      <Container>
        <FormWrap>
          <Icon to='/'>ezLoad</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormButton type='submit' onClick={submit} to='/postings'>
                Continue
              </FormButton>
              <Text to='/signup'>Create an Account</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}
