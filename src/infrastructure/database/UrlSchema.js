import mongoose from "mongoose";
import { type } from "os";

const urlSchema = new mongoose.Schema({
  originalUtl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  }
}, {timestamps: true});

export default mongoose.model("Url", urlSchema);