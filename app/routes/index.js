import Router from "koa-router";
import todoRouter from "./todo";

const router = new Router({ prefix: "/api" });

router.use(todoRouter);

export default router.routes();
