const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Types
  type UserRoomsType {
    roomId: Int!
    isRoomCompleted: Boolean!
  }

  type UserType {
    id: Int!
    userName: String!
    password: String!
    firstName: String!
    lastName: String
    userRooms: [UserRoomsType]
  }

  type QuestionType {
    id: Int!
    question: String!
    answer: String!
  }

  type RoomType {
    id: Int!
    name: String!
    questions: [QuestionType]
  }

  # Queries
  type Query {
    getUser(userName: String!): UserType!
    getUsers: [UserType!]

    getRoom(id: Int!): RoomType!
    getRooms: [RoomType!]
  }

  # Mutations
  type Mutation {
    createUser(
      userName: String!
      password: String!
      firstName: String!
      lastName: String!
      userRooms: [userRoomsInput]
    ): UserType!

    addNewRoomForUser(userRoom: userRoomsInput!): [UserType!]

    updateExistingRoomForUser(
      userId: Int!
      roomId: Int!
      isRoomCompleted: Boolean!
    ): UserRoomsType!

    createRoom(name: String!, questions: [questionsInput]): RoomType!
  }

  # Input
  input userRoomsInput {
    roomId: Int!
    isRoomCompleted: Boolean!
  }

  input questionsInput {
    question: String!
    answer: String!
  }
`;

module.exports = typeDefs;
