const router = require('express').Router()
const auth = require('../middleware/auth')
const { findByIdAndUpdate } = require('../models/postModel')
const Post = require('../models/postModel')

// Post a load
router.post('/', auth, async (req, res) => {
  try {
    const {
      pickup,
      origin,
      destination,
      trip,
      length,
      weight,
      type,
      price,
      creditScore,
    } = req.body

    // validation
    if (
      !pickup ||
      !origin ||
      !originAddress ||
      !destination ||
      !destinationAddress ||
      !trip ||
      !length ||
      !weight ||
      !type ||
      !price ||
      !creditScore
    )
      res.status(400).json({ message: 'Not all fields have been entered' })

    const newPost = new Post({
      pickup,
      origin,
      destination,
      trip,
      length,
      weight,
      type,
      price,
      creditScore,
      userId: req.user,
    })
    const savedPost = await newPost.save()
    res.json(savedPost)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Get a user's posts
router.get('/all', auth, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user })
    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Delete a post
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findOne({ userId: req.user, _id: req.params.id })
    if (!post)
      return res.status(400).json({
        message: 'No post found with this ID that belongs to the current user.',
      })
    const deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.json(deletedPost)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
