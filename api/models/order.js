const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true, // The user field is required
  },
  products: [
    {
      name: {
        type: String,
        required: true, // The name field is required
      },
      quantity: {
        type: Number,
        required: true, // The quantity field is required
      },
      price: {
        type: Number,
        required: true, // The price field is required
      },
      image: {
        type: String,
        required: true, // The image field is required
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true, // The totalPrice field is required
  },
  shippingAddress: {
    name: {
      type: String,
      required: true, // The name field is required
    },
    mobileNo: {
      type: String,
      required: true, // The mobileNo field is required
    },
    houseNo: {
      type: String,
      required: true, // The houseNo field is required
    },
    street: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
