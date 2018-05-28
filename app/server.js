import Koa from "koa";
import initConnectors from "./connectors";
import routes from "./routes";

const PORT = 5000;
const app = new Koa();

app.use(routes);

const server = app.listen(PORT, err => {
  if (err) console.error(err);
  console.log(`Server running on port: ${PORT}`);
});

initConnectors(server);

export default server;
