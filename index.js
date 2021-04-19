const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./Schema/typeDefs");
const resolvers = require("./schema/resolvers");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(3001, () => console.log("Server running port: 3001"));
