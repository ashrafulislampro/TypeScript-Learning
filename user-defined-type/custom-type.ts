type User = { userName: string; userId?: number }; // ? mark means this property is optional
let users: User[];
users = [];

let user: User = { userName: "ashraf", userId: 101 };
users.push(user);

let user1: User = { userName: "ashraful", userId: 102 };
users.push(user1);

for (const key in users) {
  console.log(users[key]);
}

// requestType

type RequestType = "GET" | "POST";

let getRequest: RequestType;

getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}

requestHandler("GET");
