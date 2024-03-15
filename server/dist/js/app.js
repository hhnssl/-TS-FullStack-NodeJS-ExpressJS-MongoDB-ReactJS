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
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const schema_1 = require("./schema/schema");
const resolvers_1 = require("./resolvers/resolvers");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(routes_1.default);
// Connect to MongoDB
mongoose_1.default.connect("mongodb://localhost:27017/test");
mongoose_1.default.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield server.start();
        server.applyMiddleware({ app });
        const PORT = 4443;
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}
startApolloServer();
