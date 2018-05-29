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

TodoSchema.statics.addTodo = function addTodo(data) {
  return this.create(data);
};

TodoSchema.statics.findTodo = function findTodo(id) {
  return this.findOne(id).select({ __v: 0, createdAt: 0, updatedAt: 0 });
};

export default mongoose.model("todo", TodoSchema);
