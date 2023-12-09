let users: object[];
users = [];

let user: { userName: string; userId?: number }; // ? mark means this property is optional

user = { userName: "ashraf", userId: 101 };
users.push(user);
let user1: { userName: string; userId?: number };
user1 = { userName: "ashraful", userId: 102 };
users.push(user1);

for (const key in users) {
  console.log(users[key]["userName"]);
}
// console.log(users);
