import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true
  },
  kpm: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  quote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quote"
  }
});

const model = mongoose.model("Record", RecordSchema);
export default model;
