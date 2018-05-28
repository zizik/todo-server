import { Todo } from "../models";

export default {
  async addTodo(ctx) {
    try {
      await Todo.create(ctx.request.body);
    } catch (e) {
      throw Error("Cant create todo");
    }
    ctx.status = 201;
    ctx.body = { data: "all cool" };
  },
};
