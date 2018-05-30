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
  async updateTodo(ctx) {
    const { todo } = ctx.state;
    const updatedTodo = await Todo.updateTodo(ctx.request.body, todo);
    ctx.body = { data: updatedTodo };
    ctx.status = 200;
  },
  async deleteTodo(ctx) {
    const {
      params: { id },
      state: { todo },
    } = ctx;
    todo.remove();
    ctx.body = { data: { id } };
    ctx.status = 200;
  },
  async getUser(id, ctx, next) {
    const todo = await Todo.findTodo(id);
    if (!todo) {
      ctx.throw(400, `Can't find todo with id = ${id}`);
    }
    ctx.state.todo = todo;
    await next();
  },
};
