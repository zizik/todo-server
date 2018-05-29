import { Todo } from "../models";

export default {
  async addTodo(ctx) {
    const { _id } = await Todo.addTodo(ctx.request.body);
    const data = await Todo.findTodo(_id);
    ctx.body = { data };
    ctx.status = 201;
  },
  async getAllTodos(ctx) {
    const data = await Todo.getAllTodos();
    ctx.body = { data };
    ctx.status = 200;
  },
};
