import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4443";

/* GraphQL API */
const GQL_URI = "http://localhost:4443/graphql";
export const getTodosGql = async () => {
  const query = `
    query Todos {
      todos {
        id
        name
        description
        status
      }
    }
  `;

  try {
    const response = await fetch(GQL_URI, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const todos = await response.json();
    return todos;
  } catch (error) {
    throw error;
  }
};

export const addTodoGql = async (formData) => {
  const mutation = `
    mutation CreateTodo {
        createTodo(name: "${formData.name}", description: "${formData.description}", status: false) {
            id
        }
    }
  `;
  try {
    const response = await fetch(GQL_URI, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ query: mutation }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    throw error;
  }
};

/* REST API */
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );
    return saveTodo;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    throw error;
  }
};
