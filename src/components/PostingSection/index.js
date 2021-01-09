import React, { useState, useContext, useEffect } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import UserContext from '../../context/UserContext'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import {
  PostingBtnWrap,
  PostingColumn1,
  PostingColumn2,
  PostingHeading,
  PostingInfoContainer,
  PostingInfoRow,
  PostingInfoWrapper,
  PostingSubtitle,
  PostingTextWrapper,
  PostingTopLine,
} from './PostingSectionElements'

const PostingSection = () => {
  const [hover, setHover] = useState(false)
  const [data, setData] = useState([])
  const onHover = () => {
    setHover(!hover)
  }
  const { userData, setUserData } = useContext(UserContext)
  const history = useHistory()
  const postings = () => history.push('/postings')

  // const getPosts = async (e) => {
  //   axios
  //     .get('http://localhost:5000/posts/', {
  //       headers: {
  //         'x-auth-token': localStorage.getItem('auth-token'),
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts/feed', {
        headers: {
          'x-auth-token': localStorage.getItem('auth-token'),
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return data.map((item) => {
    return (
      <PostingInfoContainer>
        <PostingInfoWrapper>
          <PostingInfoRow>
            <PostingColumn1>
              <PostingTextWrapper>
                <PostingTopLine>Pickup Date: {item.pickup}</PostingTopLine>
                <PostingHeading>
                  {item.origin} ➡ {item.destination}
                </PostingHeading>
                <PostingSubtitle>
                  Origin Address: {item.originAddress}
                </PostingSubtitle>
                <PostingSubtitle>
                  Destination Address: {item.destinationAddress}
                </PostingSubtitle>
                <PostingSubtitle>Trip Length: {item.trip} mi</PostingSubtitle>
                <PostingSubtitle>Load Length: {item.length} ft</PostingSubtitle>
                <PostingSubtitle>Weight: {item.weight} lbs</PostingSubtitle>
                <PostingSubtitle>Load Type: {item.type}</PostingSubtitle>
                <PostingSubtitle>Price: {item.price}</PostingSubtitle>
                <PostingSubtitle>
                  Credit Score: {item.creditScore}
                </PostingSubtitle>
              </PostingTextWrapper>
            </PostingColumn1>
            <PostingColumn2>
              <PostingBtnWrap>
                <Button
                  to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Reserve
                </Button>
              </PostingBtnWrap>
            </PostingColumn2>
          </PostingInfoRow>
        </PostingInfoWrapper>
      </PostingInfoContainer>
    )
  })
}

export default PostingSection
