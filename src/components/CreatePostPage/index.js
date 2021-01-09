import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import {
  CPContainer,
  CPFormWrap,
  CPIcon,
  CPFormContent,
  CPForm,
  CPFormH1,
  CPFormLabel,
  CPFormInput,
  CPFormButton,
  CPText,
} from './CreatePostElements'

export default function CreatePostPage() {
  const [pickup, setPickup] = useState()
  const [origin, setOrigin] = useState()
  const [originAddress, setOriginAddress] = useState()
  const [destination, setDestination] = useState()
  const [destinationAddress, setDestinationAddress] = useState()
  const [trip, setTrip] = useState()
  const [length, setLength] = useState()
  const [weight, setWeight] = useState()
  const [type, setType] = useState()
  const [price, setPrice] = useState()
  const [creditScore, setCreditScore] = useState()

  const history = useHistory()
  const addPost = async (e) => {
    e.preventDefault()
    console.log('posted')
    Axios.post(
      'http://localhost:5000/posts/',
      {
        pickup: pickup,
        origin: origin,
        originAddress: originAddress,
        destination: destination,
        destinationAddress: destinationAddress,
        trip: trip,
        length: length,
        weight: weight,
        type: type,
        price: price,
        creditScore: creditScore,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('auth-token'),
        },
      }
    )
      .then((data) => {
        if (data.error) {
          console.log('error')
        } else {
          history.push('/postings')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <CPContainer>
        <CPFormWrap>
          <CPIcon to='/postings'>ezLoad</CPIcon>
          <CPFormContent>
            <CPForm type='submit' onSubmit={addPost}>
              <CPFormH1>Create Post</CPFormH1>
              <CPFormLabel htmlFor='for'>Pickup Date</CPFormLabel>
              <CPFormInput
                type='date'
                onChange={(e) => setPickup(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>
                Origin City, State/Province
              </CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setOrigin(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Origin Address</CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setOriginAddress(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>
                Destination City, State/Province
              </CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setDestination(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Destination Address</CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setDestinationAddress(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Trip Length (mi)</CPFormLabel>
              <CPFormInput
                type='number'
                onChange={(e) => setTrip(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Load length (ft)</CPFormLabel>
              <CPFormInput
                type='number'
                onChange={(e) => setLength(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Weight (lbs)</CPFormLabel>
              <CPFormInput
                type='number'
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Load Type</CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setType(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Price</CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <CPFormLabel htmlFor='for'>Credit Score</CPFormLabel>
              <CPFormInput
                type='text'
                onChange={(e) => setCreditScore(e.target.value)}
                required
              />
              <CPFormButton type='submit'>Create Post</CPFormButton>
              <CPText to='/postings'>Back to Postings</CPText>
            </CPForm>
          </CPFormContent>
        </CPFormWrap>
      </CPContainer>
    </>
  )
}
