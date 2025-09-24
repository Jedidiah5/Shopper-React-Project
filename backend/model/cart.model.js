const mongoose = require('mongoose')

const {Schema} = mongoose

const cartSchema = new Schema({
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, default: 1, min: 1 },
        unitPrice: { type: Number, required: true } 
      }
    ],
    totalPrice: { type: Number, default: 0 }
}, {timestamps: true})

// auto-calculate total before save
cartSchema.pre("save", function (next) {
  this.totalPrice = this.products.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );
  next();
});

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart