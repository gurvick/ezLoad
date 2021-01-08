import React, { useState, useContext } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import {
  PostingContainer,
  PostingBg,
  PostingContent,
  PostingH1,
} from './PostingSectionElements'

const PostingSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  const { userData, setUserData } = useContext(UserContext)
  const history = useHistory()
  const postings = () => history.push('/postings')

  return (
    <>
      <PostingContainer id='home'>
        <PostingBg></PostingBg>
        <PostingContent></PostingContent>
      </PostingContainer>
    </>
  )
}

export default PostingSection
