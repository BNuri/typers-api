import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  writer: {
    type: String
  },
  quote: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Quote", QuoteSchema);
export default model;
