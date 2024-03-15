import { ApolloServer } from "apollo-server-express";
import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/resolvers";
import bodyParser from "body-parser";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(todoRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test");
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer() {
  await server.start();

  server.applyMiddleware({ app });

  const PORT = 4443;
  app.listen(PORT, () => {
    console.log(
      `Server listening on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer();
