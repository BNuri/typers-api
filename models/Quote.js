import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "ID is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  quote: {
    type: String,
    required: "Quote is required"
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
