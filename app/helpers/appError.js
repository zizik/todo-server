function formatErrors(errors) {
  return Object.values(errors).reduce(
    (acc, error) => ({
      ...acc,
      [error.path]: error.message,
    }),
    {},
  );
}

export default () => async (ctx, next) => {
  try {
    await next();
  } catch ({ status = 500, message = "Server Error", name, errors }) {
    if (name === "ValidationError") {
      ctx.status = 400;
      ctx.body = {
        errors: formatErrors(errors),
      };
    } else {
      ctx.status = status;
      ctx.body = { status, message };
    }
  }
};
