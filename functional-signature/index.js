var userInfo;
var userInfo1;
var userInfo2;
var userInfo3;
userInfo = function () {
    console.log("Ashraful Islam is 25 years old");
};
userInfo1 = function (name) {
    console.log("".concat(name, " is 24 years old."));
};
userInfo2 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old!");
};
userInfo3 = function (name, age, married) {
    return "".concat(name, " is ").concat(age, " years old and married = ").concat(married ? "Yes" : "No", "!");
};
userInfo();
userInfo1("Ashraful Islam");
console.log(userInfo2("Boshra", 19));
console.log(userInfo3("Umme Umama", 24, false));
// git remote add origin https://github.com/ashrafulislampro/functional-signature.git
