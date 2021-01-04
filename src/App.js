import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
      </Switch>
    </Router>
  )
}

export default App
