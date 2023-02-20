import mongoose from "mongoose";

const cartCollection = 'cart';

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'product'
        },
        quantity: Number
      }
    ],
    default: []
  }
});

  export const Cart = mongoose.model(cartCollection, cartSchema);