import dotenv from "dotenv";

import { IS_TEST } from "./envs";
import * as test from "./test";

if (!IS_TEST) {
  dotenv.config();
}

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || test.MONGO_URI;

export { PORT, MONGO_URI };
