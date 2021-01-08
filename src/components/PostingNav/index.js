import React, { useState, useEffect, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { useHistory } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import UserContext from '../../context/UserContext'
import {
  PostingMobileIcon,
  PostingNav,
  PostingNavbarContainer,
  PostingNavBtn,
  PostingNavBtnLink,
  PostingNavItem,
  PostingNavLinks,
  PostingNavLogo,
  PostingNavMenu,
} from './PostingNavElements'

export default function PostingNavbar({ toggle }) {
  const { userData, setUserData } = useContext(UserContext)
  const history = useHistory()
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    })
    localStorage.setItem('auth-token', '')
    history.push('/')
  }
  const home = () => {
    history.push('/')
  }
  const postings = () => {
    history.push('/postings')
  }
  const createpost = () => {
    history.push('/createpost')
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <PostingNav>
          <PostingNavbarContainer>
            <PostingNavLogo to='/' onClick={home}>
              <h1>ezLoad</h1>
            </PostingNavLogo>
            <PostingMobileIcon onClick={toggle}>
              <FaBars />
            </PostingMobileIcon>
            <PostingNavMenu>
              <PostingNavItem>
                <PostingNavLinks
                  onClick={home}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Home
                </PostingNavLinks>
              </PostingNavItem>
              <PostingNavItem>
                <PostingNavLinks
                  onClick={postings}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Postings
                </PostingNavLinks>
              </PostingNavItem>
              <PostingNavItem>
                <PostingNavLinks
                  to='services' // Add account settings page
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Account Settings
                </PostingNavLinks>
              </PostingNavItem>
            </PostingNavMenu>
            <PostingNavBtn>
              <PostingNavBtnLink onClick={createpost}>
                Create Post
              </PostingNavBtnLink>
            </PostingNavBtn>
            <PostingNavBtn>
              <PostingNavBtnLink onClick={logout}>Log Out</PostingNavBtnLink>
            </PostingNavBtn>
          </PostingNavbarContainer>
        </PostingNav>
      </IconContext.Provider>
    </>
  )
}
