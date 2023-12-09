var users;
users = [];
var user = { userName: "ashraf", userId: 101 };
users.push(user);
var user1 = { userName: "ashraful", userId: 102 };
users.push(user1);
for (var key in users) {
    console.log(users[key]);
}
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
