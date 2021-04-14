const users = [
  {
    id: 1,
    userName: "Sushant",
    password: "Sushant",
    firstName: "Sushant",
    lastName: "Jadhav",
    userRooms: [
      { roomId: 1, isRoomCompleted: true },
      { roomId: 2, isRoomCompleted: true },
      { roomId: 3, isRoomCompleted: false },
    ],
  },
  {
    id: 2,
    userName: "Aakash",
    password: "Aakash",
    firstName: "Aakash",
    lastName: "Shinde",
    userRooms: [
      { roomId: 1, isRoomCompleted: true },
      { roomId: 2, isRoomCompleted: false },
      { roomId: 3, isRoomCompleted: false },
    ],
  },
];
const rooms = [
  {
    id: 1,
    name: "room 1",
    questions: [
      {
        id: 1,
        question: "Is prime minster of india Narendra Modi?",
        answer: "true",
      },
      {
        id: 2,
        question: "Capital of India?",
        answer: "Delhi",
      },
      {
        id: 3,
        question: "Indias flag name?",
        answer: "Tricolor",
      },
    ],
  },
  {
    id: 2,
    name: "room 2",
    questions: [
      {
        id: "1",
        question: "Indias longes river?",
        answer: "Ganga",
      },
      {
        id: "2",
        question: "Indais tallest Minar",
        answer: "Kutub Minar",
      },
      {
        id: "3",
        question: "When India got freedom",
        answer: "1947",
      },
    ],
  },
  {
    id: 3,
    name: "room 3",
    questions: [
      {
        id: "1",
        question: "Indias smallest state?",
        answer: "Goa",
      },
      {
        id: "2",
        question: "Indias first bullet train?",
        answer: "Mumbai-Ahamdabad",
      },
      {
        id: "3",
        question: "Indias first Metro?",
        answer: "Delhi",
      },
    ],
  },
  {
    id: 4,
    name: "Room 4",
  },
];

module.exports = { users, rooms };
