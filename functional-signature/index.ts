let userInfo: () => void;
let userInfo1: (name: string) => void;
let userInfo2: (name: string, age: number) => string;
let userInfo3: (name: string, age: number, married: boolean) => string;

userInfo = () => {
  console.log("Ashraful Islam is 25 years old");
};

userInfo1 = (name: string) => {
  console.log(`${name} is 24 years old.`);
};

userInfo2 = (name: string, age: number) => {
  return `${name} is ${age} years old!`;
};
userInfo3 = (name: string, age: number, married: boolean) => {
  return `${name} is ${age} years old and married = ${married ? "Yes" : "No"}!`;
};

userInfo();
userInfo1("Ashraful Islam");
console.log(userInfo2("Boshra", 19));
console.log(userInfo3("Umme Umama", 24, false));

// git remote add origin https://github.com/ashrafulislampro/functional-signature.git
