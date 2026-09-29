const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  flavor: {
    type: String,
    required: true,
    enum: ['Vanilla', 'Chocolate', 'Strawberry', 'Mint', 'Caramel', 'Cookie Dough', 'Pistachio', 'Butter Pecan', 'Rocky Road', 'Cotton Candy', 'Custom']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  size: {
    type: String,
    enum: ['Scoop', 'Small', 'Medium', 'Large', 'Family'],
    default: 'Medium'
  },
  category: {
    type: String,
    enum: ['Premium', 'Classic', 'Vegan', 'Low-Fat', 'Seasonal'],
    default: 'Classic'
  },
  image: {
    type: String,
    default: '/images/ice-cream-default.jpg'
  },
  ingredients: [String],
  allergens: [String],
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 100
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: [{
    userId: mongoose.Schema.Types.ObjectId,
    userName: String,
    rating: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now }
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
