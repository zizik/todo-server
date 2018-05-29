import faker from "faker/locale/ru";
import { Todo } from "../models";

export default () => {
  const promises = [];

  for (let i = 0; i < 20; i++) {
    const todoPromise = Todo.create({
      todo: `${faker.lorem.sentence()}`,
      isComplete: faker.random.boolean(),
    });

    promises.push(todoPromise);
  }

  return Promise.all(promises);
};
