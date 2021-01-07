import React, { useState, useContext } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  const { userData, setUserData } = useContext(UserContext)
  const history = useHistory()
  const postings = () => history.push('/postings')

  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Find Your Next Load</HeroH1>
          {userData.user ? (
            <>
              <HeroP>Click View Postings to find a load near you</HeroP>
              <HeroBtnWrapper>
                <Button
                  onClick={postings}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  View Postings {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </>
          ) : (
            <>
              <HeroP>
                Sign up and join the easiest and fastest truck and load board
                platform.
              </HeroP>
              <HeroBtnWrapper>
                <Button
                  to='signup'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </>
          )}
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
