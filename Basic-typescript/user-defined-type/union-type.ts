let usersId: string | number | boolean;

usersId = "101";
usersId = 101;
usersId = true;

function getUsers(usersId: string | number | boolean) {
  console.log(usersId);
}

getUsers("101");
getUsers(101);
getUsers(true);
