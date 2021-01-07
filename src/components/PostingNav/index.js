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
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const { userData, setUserData } = useContext(UserContext)
  const history = useHistory()
  const signup = () => history.push('/signup')
  const signin = () => history.push('/signin')
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    })
    localStorage.setItem('auth-token', '')
    history.push('/')
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <PostingNav scrollNav={scrollNav}>
          <PostingNavbarContainer>
            <PostingNavLogo to='/' onClick={toggleHome}>
              <h1>ezLoad</h1>
            </PostingNavLogo>
            <PostingMobileIcon onClick={toggle}>
              <FaBars />
            </PostingMobileIcon>
            <PostingNavMenu>
              <PostingNavItem>
                <PostingNavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </PostingNavLinks>
              </PostingNavItem>
              <PostingNavItem>
                <PostingNavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Discover
                </PostingNavLinks>
              </PostingNavItem>
              <PostingNavItem>
                <PostingNavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </PostingNavLinks>
              </PostingNavItem>
              <PostingNavItem>
                <PostingNavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </PostingNavLinks>
              </PostingNavItem>
            </PostingNavMenu>
            <PostingNavBtn>
              <PostingNavBtnLink onClick={logout}>Log Out</PostingNavBtnLink>
            </PostingNavBtn>
          </PostingNavbarContainer>
        </PostingNav>
      </IconContext.Provider>
    </>
  )
}
