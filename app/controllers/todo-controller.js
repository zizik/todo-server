import { Todo } from "../models";

export default {
  async addTodo(ctx) {
    try {
      await Todo.create({ todo: "Test" });
    } catch (e) {
      throw Error("Cant create todo");
    }
    ctx.status = 201;
    ctx.body = { data: "all cool" };
  },
};
