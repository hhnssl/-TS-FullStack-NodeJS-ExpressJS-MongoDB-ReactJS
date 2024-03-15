import { Response, Request } from "express";
import { ITodo } from "../types/todo"; // 타입 체크 용??
import todoModel from "../models/todoModel";

const whatApi = `
##############################################
GraphQL API로 동작중....
##############################################
`;

export const resolvers = {
  Query: {
    todos: async () => {
      try {
        console.log(whatApi);
        return await todoModel.find();
      } catch (err) {
        throw new Error(`데이터베이스에서 목록을 가져오는 데에 실패함`);
      }
    },
  },

  Mutation: {
    createTodo: async (_: any, { name, description }: ITodo) => {
      try {
        console.log(whatApi);
        const todo = new todoModel({ name, description });
        return await todo.save();
      } catch (err) {
        throw new Error(`데이터베이스에 새 todo를 추가하는 데에 실패함`);
      }
    },
    updateTodo: async (_, { id, name, description }) => {
      try {
        console.log(whatApi);
        return await todoModel.findByIdAndUpdate(
          id,
          { name, description },
          { new: true }
        );
      } catch (err) {
        throw new Error(`투두를 수정하는 것에 실패. id: ${id}`);
      }
    },
    deleteTodo: async (_, { id }) => {
      try {
        console.log(whatApi);
        return await todoModel.findByIdAndDelete(id);
      } catch (err) {
        throw new Error(`투두를 삭제하는 것에 실패. id: ${id}`);
      }
    },
  },
};
