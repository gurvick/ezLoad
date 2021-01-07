import React, { useState } from 'react'
import PostingNavbar from '../components/PostingNav'
import PostingSection from '../components/PostingSection'

const PostingsPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <PostingNavbar toggle={toggle} />
      <PostingSection />
    </>
  )
}

export default PostingsPage
