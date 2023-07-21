import mongoose, { mongo } from "mongoose";
/* Mongoose schema for collection */
const buyIT_items = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    descriptionHeader: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    specs: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Items = mongoose.model("buyIT_items", buyIT_items);
export default Items;
