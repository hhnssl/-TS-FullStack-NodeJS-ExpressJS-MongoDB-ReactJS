import { Document } from "mongoose";

// Todo 모델이 어떻게 보여야하는지 정의. 유형과 구조를 정의함
export interface ITodo extends Document {
  name: string;
  description: string;
  status: boolean; // 컴플리트 상태
}

/* 
  Creating your first Document
  https://mongoosejs.com/docs/typescript.html 
*/
