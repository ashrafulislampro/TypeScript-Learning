var users;
users = [];
var user; // ? mark means this property is optional
user = { userName: "ashraf", userId: 101 };
users.push(user);
var user1;
user1 = { userName: "ashraful", userId: 102 };
users.push(user1);
for (var key in users) {
    console.log(users[key]["userName"]);
}
// console.log(users);
