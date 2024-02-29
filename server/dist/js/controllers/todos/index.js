"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todoModel_1 = __importDefault(require("../../models/todoModel"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoModel_1.default.find(); // 모델객체.find();
        res.status(200).json({ todos });
    }
    catch (err) {
        throw err;
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body; // 객체 as 타입. Pick은 타스의 유틸리티 타입
        const todo = new todoModel_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        const newTodo = yield todo.save(); // todo는 FE 단에서 생성해서 보낼용도이고
        const allTodos = yield todoModel_1.default.find(); // Todo는 디비단에서 조회해서 가져올 용도
        res
            .status(201)
            .json({ message: "Todo added", todo: newTodo, todos: allTodos });
    }
    catch (err) {
        throw err;
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const { params: { id }, body, } = req; // params에 id 넣고, body에 body 넣겠다?
        const updateTodo = yield todoModel_1.default.findByIdAndUpdate({ _id: id }, // 위 req.params.id에서 받은 값이 _id임
        body); //findByIdAndUpdate(): 반환값: 업데이트된 Todo 혹은 해당 Todo가 없을 경우 null
        const allTodos = yield todoModel_1.default.find();
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
        });
    }
    catch (err) {
        throw err;
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield todoModel_1.default.findByIdAndDelete(req.params.id);
        const allTodos = yield todoModel_1.default.find();
        res.status(200).json({
            message: "todo deleted",
            todo: deletedTodo,
            todos: allTodos,
        });
    }
    catch (err) {
        throw err;
    }
});
exports.deleteTodo = deleteTodo;
