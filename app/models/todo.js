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

TodoSchema.statics.findTodo = function findTodo(_id) {
  return this.findOne({ _id }).select({ __v: 0, createdAt: 0, updatedAt: 0 });
};

TodoSchema.statics.getAllTodos = function getAllTodos() {
  return this.find({}).select({ __v: 0, createdAt: 0, updatedAt: 0 });
};

TodoSchema.statics.updateTodo = function updateTodo(data, todo) {
  todo.set(data);
  return todo.save();
};

export default mongoose.model("todo", TodoSchema);
