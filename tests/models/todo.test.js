import mongoose from "mongoose";

import mongooseConnector from "../../app/connectors/mongoose-connector";
import { MONGO_URI } from "../../app/config";
import { Todo } from "../../app/models";

describe("Todo Model", () => {
  beforeAll(async () => {
    await mongooseConnector(MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  it("create todo", async () => {
    const todoData = {
      description: "test-todo",
    };

    const todo = await Todo.addTodo(todoData);

    expect(todo.isComplete).toBe(false);
    expect(todo.description).toBe("test-todo");
    expect(todo).toHaveProperty("_id");
  });
});
