import mongoose from "mongoose";

export default mongoUri => {
  if (!mongoUri) {
    throw Error("Mongo uri is not provided");
  }

  return mongoose.connect(mongoUri).then(mongodb => {
    console.log("Mongo connected");
    return mongodb;
  });
};
