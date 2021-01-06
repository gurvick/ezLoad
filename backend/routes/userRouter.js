const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const User = require('../models/userModel')

// register
router.post('/register', async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName, phoneNum } = req.body

    // validation

    // make sure all fields are entered
    if (!email || !password || !passwordCheck || !phoneNum)
      return res.status(400).json({ msg: 'Not all fields have been entered.' })

    // make sure the password is more than 5 characters
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: 'The password needs to be at least 5 characters long.' })

    // make sure the password is the same as the passwordCheck
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: 'Enter the same password twice for verification.' })

    // make sure that the email hasn't already been registered
    const existingUser = await User.findOne({ email: email })
    if (existingUser)
      return res
        .status(400)
        .json({ msg: 'An account with this email already exists.' })

    // if the user does not specify a display name, the display name is the email
    if (!displayName) displayName = email

    // hash password
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // save new user to database
    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
      phoneNum,
    })

    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // validate
    // make sure email and password fields are filled in
    if (!email || !password)
      return res.status(400).json({ msg: 'Not all fields have been entered.' })

    // make sure a user with the email exists
    const user = await User.findOne({ email: email })
    if (!user)
      return res
        .status(400)
        .json({ msg: 'No account with this email has been registered.' })

    // make sure passwords match
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' })

    // assign token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
        phoneNum: user.phoneNum,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// delete

router.delete('/delete', auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user)
    res.json(deletedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// check if token is valid
router.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token')
    if (!token) return res.json(false)

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) return res.json(false)

    const user = await User.findById(verified.id)
    if (!user) return res.json(false)

    return res.json(true)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// update user
//Updating User
router.patch('/update/:id', async (req, res) => {
  const updateUser = await User.findById(req.params.id)
  if (!updateUser) {
    res.status(400).json({ message: 'User not found' })
  } else {
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(updateUser.password, salt)
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        email: req.body.email,
        password: hashedPass,
        displayName: req.body.displayName,
        phoneNum: req.body.phoneNum,
      }
    )
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message })
      })
  }
})

router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user)
  res.json({
    displayName: user.displayName,
    id: user._id,
  })
})

module.exports = router
