import mongooseConnector from "./mongoose-connector";

const MONGO_URI = "mongodb://zizik:zizik@ds231460.mlab.com:31460/todo";

async function connectorsInit(server) {
  try {
    await mongooseConnector(MONGO_URI);
  } catch (err) {
    console.log(err);
    if (server) server.close();
  }
}

export { mongooseConnector };

export default connectorsInit;
