import { MONGO_URI } from "../config";
import mongooseConnector from "../connectors/mongoose-connector";
import todoSeeds from "./todo";

async function initSeeds() {
  const mongoConnection = await mongooseConnector(MONGO_URI);

  await mongoConnection.connection.db.dropDatabase();

  try {
    const todo = await todoSeeds();
    console.log(todo);
  } catch (err) {
    console.error(err);
  } finally {
    mongoConnection.connection.close();
  }
}

initSeeds();
