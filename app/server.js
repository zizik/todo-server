import Koa from "koa";
// import initConnectors from "./connectors";
// import routes from "./routes";

// initConnectors();

const PORT = 5000;
const app = new Koa();

// app.use(routes);

app.use(async ctx => {
  ctx.body = "<h1>Summary<h1>";
});

const server = app.listen(PORT, err => {
  if (err) console.error(err);

  console.log(`Server running on port: ${PORT}`);
});

export default server;
