var users = [];
var user1 = {
    id: 1,
    name: "Ashraful",
    age: 24,
};
var user2 = {
    id: 2,
    name: "Boshra",
    age: 19,
};
var user3 = {
    id: 3,
    name: "Umme Umama",
    age: 24,
};
users.push(user1);
users.push(user2);
users.push(user3);
var displayInfo = function (user) {
    console.log("".concat(user.id, " is ").concat(user.name, " and ").concat(user.age));
};
users.forEach(function (user) { return displayInfo(user); });
