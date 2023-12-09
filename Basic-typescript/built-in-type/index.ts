//  built-in data type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 123;
firstName = "Ashraful";
lastName = " Islam";
fullName = firstName.concat(lastName);
isActivated = true;

console.log(
  `Your id: ${userId}, userName: ${fullName}, account activated: ${isActivated}`
);

console.log(fullName.split(" "));
