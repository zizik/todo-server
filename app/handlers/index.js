import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

import appError from "../helpers/appError";
import { IS_DEV } from "../config/envs";

export default app => {
  if (IS_DEV) {
    app.use(logger());
  }

  app.use(appError());
  app.use(bodyParser());
};
