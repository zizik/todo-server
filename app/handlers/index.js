import logger from "koa-logger";
import cors from "koa2-cors";
import bodyParser from "koa-bodyparser";

import appError from "../helpers/appError";
import { IS_DEV } from "../config/envs";

export default app => {
  if (IS_DEV) {
    app.use(logger());
  }

  app.use(cors());
  app.use(appError());
  app.use(bodyParser());
};
