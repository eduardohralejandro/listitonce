import mongoose from "mongoose";


const itemsSubSchema = new mongoose.Schema({
    id: {
      type: String,
      required: false,
    },
    product: {
      type: String,
      required: true,
    },
    employee: {
      type: String,
      required: false,
      default: null,
    },
    bought: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
  });

const ListSchema = new mongoose.Schema({
  listTitle: {
    type: String,
  },
  id: {
    type: String,
  },
  items: [ itemsSubSchema ],
});

export default mongoose.model("ListSchema", ListSchema);
