import React, { useState, useContext } from 'react'
import PostingNavbar from '../components/PostingNav'
import PostingSection from '../components/PostingSection'
import UserContext from '../context/UserContext'
import { useHistory } from 'react-router-dom'
import PostingSidebar from '../components/PostingSidebar'
import PostingHeroSection from '../components/PostingHero'

const PostingsPage = () => {
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
        <>
          <PostingSidebar isOpen={isOpen} toggle={toggle} />
          <PostingNavbar toggle={toggle} />
          <PostingHeroSection />
          <PostingSection />
        </>
      ) : (
        <>
          <h1>Error</h1>
          <h2>No token detected</h2>
          <button onClick={backtohome}>Back to home</button>
        </>
      )}
    </>
  )
}

export default PostingsPage
