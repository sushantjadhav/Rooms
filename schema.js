const axios = require("axios");
const { response } = require("express");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "users",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

const QuestionType = new GraphQLObjectType({
  name: "questions",
  fields: {
    id: { type: GraphQLString },
    question: { type: GraphQLString },
    answer: { type: GraphQLString },
  },
});

const RoomType = new GraphQLObjectType({
  name: "rooms",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    questions: {
      type: new GraphQLList(QuestionType),
    },
  },
});

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: "customer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3000/users/" + args.id)
          .then((responce) => responce.data);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get("http://localhost:3000/users").then((res) => {
          console.log("responce:: ", res.data);
          return res.data;
        });
      },
    },
    room: {
      type: RoomType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3000/rooms/" + args.id)
          .then((responce) => responce.data);
      },
    },
    rooms: {
      type: new GraphQLList(RoomType),
      resolve(parentValue, args) {
        return axios.get("http://localhost:3000/rooms").then((response) => {
          console.log("Rooms:: ", response.data);
          return response.data;
        });
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios
          .post("http://localhost:3000/users/", args)
          .then((responce) => responce.data);
      },
    },

    addRoom: {
      type: RoomType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        console.log("args:: ", args);
        return axios
          .post("http://localhost:3000/rooms/", args)
          .then((responce) => response.data);
      },
    },

    addQuestions: {
      type: new GraphQLList(QuestionType),
      args: {
        roomId: { type: GraphQLString },
        id: { type: GraphQLString },
        question: { type: GraphQLString },
        answer: { type: GraphQLString },
      },
      respolve(parentValue, args) {
        return axios
          .post(`http://localhost:3000/rooms/${args.roomId}/`, {
            id: args.id,
            question: args.question,
            answer: args.answer,
          })
          .then((response) => response.data);
      },
    },

    addCustomer: {
      type: CustomerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios
          .post("http://localhost:3000/customers/", {
            name: args.name,
            email: args.email,
            age: args.age,
          })
          .then((res) => res.data);
      },
    },

    deleteCustomer: {
      type: CustomerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios
          .delete("http://localhost:3000/customers/" + args.id)
          .then((res) => res.data);
      },
    },

    editCustomer: {
      type: CustomerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLString },
      },
      resolve(parentValues, args) {
        return axios
          .patch("http://localhost:3000/customers/" + args.id, args)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
