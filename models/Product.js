const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  inventory: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId
      },
      name: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  likes: [{
    type: mongoose.Schema.ObjectId
  }],
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('product', ProductSchema);