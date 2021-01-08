import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserContext'
import CreatePostPage from '../components/CreatePostPage'

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const history = useHistory()
  const backtohome = () => history.push('/')

  const { userData, setUserData } = useContext(UserContext)
  return (
    <>
      {userData.user ? (
        <CreatePostPage />
      ) : (
        <div>
          <h1>Error</h1>
          <h2>No token detected</h2>
          <button onClick={backtohome}>Back to home</button>
        </div>
      )}
    </>
  )
}

export default CreatePost
