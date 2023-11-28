interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [];

let user1: User = {
  id: 1,
  name: "Ashraful",
  age: 24,
};

let user2: User = {
  id: 2,
  name: "Boshra",
  age: 19,
};
let user3: User = {
  id: 3,
  name: "Umme Umama",
  age: 24,
};

users.push(user1);
users.push(user2);
users.push(user3);

const displayInfo = (user: User) => {
  console.log(`${user.id} is ${user.name} and ${user.age}`);
};

users.forEach((user) => displayInfo(user));
