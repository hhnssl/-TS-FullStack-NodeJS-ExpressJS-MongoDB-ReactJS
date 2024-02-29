# 폴더 및 파일 구조 참고

https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#api-with-nodejs-express-mongodb-and-typescript

# 서버와 클라이언트 동시에 구동하기

1. yarn add -D concurrently nodemon
2. package.json 에 다음 내용 추가.
   "scripts": {
   "build": "tsc",
   "start": "concurrently \"tsc -w\" \"nodemon dist/js/app.js\""
   }
3. npm start 하면 자동으로 클라이언트와 서버가 실행된다??

# 패키지 설치 설명

1. -D 플래그는 devDependencies 필드에 패키지를 추가하므로, 개발 시에만 필요하고 프로덕션 환경에서는 필요하지 않다는 것을 나타냅니다.

#

https://mongoosejs.com/docs/typescript.html

# 각 클라이언트, 서버에서 yarn start 하여 구동
