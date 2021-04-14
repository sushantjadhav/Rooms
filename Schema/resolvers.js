const { users, rooms } = require("../FakeData");

const resolvers = {
  Query: {
    getUser(parentValue, args) {
      return users.find((user) => user.userName === args.userName);
    },

    getUsers() {
      return users;
    },

    getRoom(parentValue, args) {
      return rooms.find((room) => room.id === args.id);
    },

    getRooms() {
      return rooms;
    },
  },

  Mutation: {
    createUser(parentValue, args) {
      const newUser = args;
      newUser.id = users.length + 1;

      //console.log("new User: ", newUser);

      users.push(newUser);
      return newUser;
    },

    addNewRoomForUser(parentValue, args) {
      console.log("args.userRoom: ", args.userRoom);
      for (let i = 0; i < users.length; i++) {
        const rooms = users[i].userRooms.filter(
          (userRoom) => userRoom.roomId === args.userRoom.roomId
        );

        console.log("rooms.length: ", rooms.length);
        if (rooms.length == 0) {
          users[i].userRooms.push(args.userRoom);
        }
      }

      return users;
    },

    updateExistingRoomForUser(parentValue, args) {
      const user = users.find((user) => user.id === args.userId);
      const room = user.userRooms.find((room) => room.roomId === args.roomId);

      room.isRoomCompleted = args.isRoomCompleted;

      return room;
    },

    createRoom(parentValue, args) {
      const newRoom = args;
      newRoom.id = rooms.length + 1;

      // Add Id for each question
      const questions = [...newRoom.questions];
      if (questions.length > 0) {
        for (let i = 0; i < questions.length; i++) {
          questions[i].id = i + 1;
        }
        newRoom.questions = questions;
      }

      //console.log(newRoom);

      rooms.push(newRoom);
      return newRoom;
    },
  },
};

module.exports = resolvers;
