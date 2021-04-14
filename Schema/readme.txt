//------------------ User & Users
// Get User
{
  getUser(userName: "Sushant"){
    id,
    userName,
    password,
    firstName,
    lastName,
    userRooms {
      roomId,
      isRoomCompleted
    }
  }
}

// Get Users
{
  getUsers{
    id,
    userName,
    password,
    firstName,
    lastName,
    userRooms {
      roomId,
      isRoomCompleted
    }
  }
}

// Create User
mutation {
  createUser(
    userName: "Omkar", 
    password: "Omkar", 
    firstName: "Omkar", 
    lastName: "Pawar",
    userRooms: [
      {
        roomId: 1,
        isRoomCompleted: true
      },
       {
        roomId: 2,
        isRoomCompleted: false
      },
    ]
  ){
    id,
    userName,
    password,
    firstName,
    lastName,
    userRooms{
      roomId,
      isRoomCompleted
    }
  }
}

// Update existing room of User
mutation{
  updateExistingRoomForUser(
    userId: 1,
    roomId: 1,
    isRoomCompleted: true
  ){
    roomId,
    isRoomCompleted
  }
}

// Add new room for User
mutation{
  addNewRoomForUser(userRoom: {
    roomId:5,
    isRoomCompleted: false
  }){
    userName,
    userRooms{
      roomId,
      isRoomCompleted
    }
  }
}

//------------------ Room & Rooms

// Get Room
{
  getRoom(id: 1){
   	id,
    name,
   	questions{
    	id,
    	question,
    	answer
  	}
  }
}

// Get Rooms
{
  getRooms{
   	id,
    name,
   	questions{
    	id,
    	question,
    	answer
  	}
  }
}

// Create Room
mutation {
  createRoom(
    name: "Room 5",
    questions: [
      {question: "Worlds richest person?", answer: "Bill gate"},
      {question: "Indias richest person?", answer: "Mukesh Ambani"},
    ]
    
  ){
    id,
    name,
    questions {
      id,
      question,
      answer
    }
  }
}

