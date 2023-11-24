function compact1(arr: string[]) {
  if (arr.length > 10) {
    return arr.slice(0, 10);
  }
  return arr;
}

const result = compact1(["hello ", "ashraful"]);
// console.log(result);

// Describe Data

interface Account {
  id: number;
  displayName: string;
  version: 1;
}

function welcome(user: Account) {
  //   console.log(user.id);
}

welcome({ id: 112, displayName: "Welcome", version: 1 });

// second

type Result = "Pass" | "Fail";

function verify(result: Result) {
  if (result === "Pass") {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}
// verify("Fail");

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Ashraful",
  id: 112,
};

// example
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user1: User = new UserAccount("Ashraful", 102);
// console.log(user1);
