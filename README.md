# 스택
## FE
- React
- Axios
- Typescript

## BE
- Apollo Server
- Express
- MongoDB
- GraphQL
- Typescript
- Node.js

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

# 참고
https://mongoosejs.com/docs/typescript.html

# 각 클라이언트, 서버에서 yarn start 하여 구동


=============================================
# 서버
## REST API -> GraphQL API 마이그레이션을 위한 아폴로서버 도입
https://www.apollographql.com/docs/apollo-server/data/resolvers

- 타입스크립트 strict 모드 해제하고 시도 => server는 성공! client도 성공!

### REST API vs GraphQL 각각 사용 스크립트
- REST API
  - /controllers/todos

- GraphQL
  - /resolvers


# 전환 방법 참고
https://idealstring.tistory.com/7


# To do list
```markdown
[ ] FE - 라이브러리 없이 graphQL API 호출: fetch() 함수 이용
[ ] FE - Apollo Client 도입
[ ] 타입 지정
[ ] strict 모드
[ ] type-graphql 도입
```


# 주의....
- 소스트리에서 브랜치 삭제하지 말고 병합할 것...... 


# 참고 
- Apollo Server & GraphQL
https://codingmoonkwa.tistory.com/290






# 자바스크립트
1. promise를 쓰는 이유
  1. 데이터를 가져온 것보다 데이터를 쓰려고 하는 게 더 빠를 경우 에러가 발생함
    1. 데이터를 완전히 가져올 때 까지 기다리기 위해 promise 사용
    1. 쉽게 말하자면 1번이 끝나야 2번이 실행될 수 있게끔 강제하는 것임