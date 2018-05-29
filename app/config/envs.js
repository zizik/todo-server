const ENV = process.env.NODE_ENV || "development";
const IS_DEV = ENV === "development";
const IS_PROD = ENV === "production";
const IS_TEST = ENV === "test";

export { IS_DEV, IS_PROD, IS_TEST };

export default ENV;
