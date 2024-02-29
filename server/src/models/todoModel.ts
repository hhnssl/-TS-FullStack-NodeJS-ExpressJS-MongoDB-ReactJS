import { model, Schema } from "mongoose";
// model: 데이터 모델을 만들기 위해 사용 | Schema: 데이터 모델의 구조를 정의하는 데 사용
import { ITodo } from "../types/todo";

// 몽고디비 스키마를 정의. == 몽고디비에서는 실제로 어떻게 들어갈지?
const todoSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  { timestamps: true } // 스키마 생성 옵션: createdAt, updatedAt필드 자동 추가
);

export default model<ITodo>("Todo", todoSchema); // ? 다른 데서 쓸 때는 파일명(todoModel로 쓰이는 건가..)
// model() 함수: 몽고디비에서 사용할 데이터 모델을 생성하고 내보냄
// <ITodo>: 모델이 사용할 타입을 지정
// "Todo": 모델의 이름을 나타내며 몽고디비에서 이 이름으로 해당 모델을 식별하게 됨
// todoSchema: 이 모델이 사용할 스키마
// 이 모델은 몽고디비의 Todo 컬렉션과 매핑되며. Todo 항목을 생성/조회/수정/삭제하는 데 사용됨
