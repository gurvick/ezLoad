import React, { useState, useEffect, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { useHistory } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import UserContext from '../../context/UserContext'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

export default function Navbar({ toggle }) {
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
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <h1>ezLoad</h1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            {userData.user ? (
              <NavBtn>
                <NavBtnLink onClick={logout}>Log Out</NavBtnLink>
              </NavBtn>
            ) : (
              <>
                <NavBtn>
                  <NavBtnLink onClick={signup}>Sign Up</NavBtnLink>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink onClick={signin}>Sign In</NavBtnLink>
                </NavBtn>
              </>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}
