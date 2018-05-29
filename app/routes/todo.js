import Router from "koa-router";
import { todoController } from "../controllers";

const router = new Router({ prefix: "/todo" });

router
  .post("/add", todoController.addTodo)
  .get("/all", todoController.getAllTodos)
  .put("/:id", todoController.updateTodo)
  .delete("/:id", todoController.deleteTodo);

export default router.routes();
