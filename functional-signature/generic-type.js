var printUserInfo = function (userId, userAge) {
    console.log("ID: ".concat(userId, ", Age: ").concat(userAge));
};
printUserInfo("101", 24);
printUserInfo(102, 24);
printUserInfo(102, "24");
printUserInfo("102", "24");
printUserInfo(true, 24);
