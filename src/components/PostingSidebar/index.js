import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import {
  PostSidebarContainer,
  PostIcon,
  PostCloseIcon,
  PostSidebarWrapper,
  PostSidebarMenu,
  PostSidebarLink,
  PostSideBtnWrap,
  PostSidebarRoute,
} from './PostingSidebarElements'

const PostingSidebar = ({ isOpen, toggle }) => {
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

  return (
    <PostSidebarContainer isOpen={isOpen} onClick={toggle}>
      <PostIcon onClick={toggle}>
        <PostCloseIcon />
      </PostIcon>
      <PostSidebarWrapper>
        <PostSidebarMenu>
          <PostSidebarLink onClick={home}>Home</PostSidebarLink>
          <PostSidebarLink onClick={postings}>Postings</PostSidebarLink>
          <PostSidebarLink onClick={toggle}>Account Settings</PostSidebarLink>
        </PostSidebarMenu>
        <PostSideBtnWrap>
          <PostSidebarRoute onClick={logout}>Log Out</PostSidebarRoute>
        </PostSideBtnWrap>
      </PostSidebarWrapper>
    </PostSidebarContainer>
  )
}

export default PostingSidebar
