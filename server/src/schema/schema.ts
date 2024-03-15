import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Todo {
    id: ID!
    name: String
    description: String
  }

  type Query {
    todos: [Todo] # 모든 투두리스트 가져오기
  }

  type Mutation {
    createTodo(name: String, description: String): Todo
    updateTodo(
      id: ID!
      name: String
      description: String
      status: Boolean
    ): Todo
    deleteTodo(id: ID!): Todo
  }
`;
