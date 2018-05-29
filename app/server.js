import Koa from "koa";

import initConnectors from "./connectors";
import initHandlers from "./handlers";
import routes from "./routes";
import { PORT } from "./config";

const app = new Koa();

initHandlers(app);
app.use(routes);

const server = app.listen(PORT, err => {
  if (err) console.error(err);
  console.log(`Server running on port: ${PORT}`);
});

initConnectors(server);

export default server;
