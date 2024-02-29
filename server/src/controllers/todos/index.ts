import { Response, Request } from "express"; // 타입을 지정해주기 위함인가?
import { ITodo } from "../../types/todo";
import Todo from "../../models/todoModel";
import { getCombinedNodeFlags } from "typescript";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find(); // 모델객체.find();

    res.status(200).json({ todos });
  } catch (err) {
    throw err;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">; // 객체 as 타입. Pick은 타스의 유틸리티 타입

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: ITodo = await todo.save(); // todo는 FE 단에서 생성해서 보낼용도이고
    const allTodos: ITodo[] = await Todo.find(); // Todo는 디비단에서 조회해서 가져올 용도

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req);
    const {
      params: { id },
      body,
    } = req; // params에 id 넣고, body에 body 넣겠다?
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id }, // 위 req.params.id에서 받은 값이 _id임
      body
    ); //findByIdAndUpdate(): 반환값: 업데이트된 Todo 혹은 해당 Todo가 없을 경우 null
    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (err) {
    throw err;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(
      req.params.id
    );
    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: "todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (err) {
    throw err;
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
