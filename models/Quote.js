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
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Quote", QuoteSchema);
export default model;
