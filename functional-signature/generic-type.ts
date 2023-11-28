const printUserInfo = <x, y>(userId: x, userAge: y) => {
  console.log(`ID: ${userId}, Age: ${userAge}`);
};
printUserInfo("101", 24);
printUserInfo(102, 24);
printUserInfo(102, "24");
printUserInfo("102", "24");
printUserInfo(true, 24);
