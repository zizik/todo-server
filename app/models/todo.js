import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    todo: {
      type: String,
      required: "Todo is required",
      trim: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("todo", TodoSchema);
