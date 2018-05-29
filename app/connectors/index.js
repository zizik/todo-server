import mongooseConnector from "./mongoose-connector";
import { MONGO_URI } from "../config";

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
