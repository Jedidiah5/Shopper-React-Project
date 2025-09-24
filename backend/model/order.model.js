const mongoose = require("mongoose")

const {Schema} = mongoose

const orderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
        unitPrice: { type: Number, required: true }
      }
    ],
    totalPrice: { type: Number, required: true },
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipCode: { type: String, required: true }
    },
    paymentMethod: { type: String, enum: ["Card", "Bank", "Cash on Delivery", "Bank transfer"], required: true },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Shipped", "Delivered", "Cancelled"],
      default: "Pending"
    }
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order

