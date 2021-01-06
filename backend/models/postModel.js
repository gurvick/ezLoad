const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema(
  {
    pickup: {
      type: Date,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    originAddress: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    destinationAddress: {
      type: String,
      required: true,
    },
    trip: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    creditScore: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = Post = mongoose.model('post', postSchema)
