import React, { useState, useContext } from 'react'
import { Button } from '../ButtonElement'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import {
  PostingHeroContainer,
  PostingHeroBg,
  PostingHeroContent,
  PostingHeroH1,
  PostingHeroP,
  PostingHeroBtnWrapper,
  PostingArrowForward,
  PostingArrowRight,
} from './HeroElements'

const PostingHeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  const history = useHistory()

  return (
    <>
      <PostingHeroContainer>
        <PostingHeroBg></PostingHeroBg>
        <PostingHeroContent>
          <PostingHeroH1>Find Your Next Load</PostingHeroH1>
          <PostingHeroP>View Posts Below</PostingHeroP>
        </PostingHeroContent>
      </PostingHeroContainer>
    </>
  )
}

export default PostingHeroSection
