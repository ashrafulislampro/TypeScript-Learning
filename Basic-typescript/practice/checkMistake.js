function compact1(arr) {
    if (arr.length > 10) {
        return arr.slice(0, 10);
    }
    return arr;
}
var result = compact1(["hello ", "ashraful"]);
function welcome(user) {
    //   console.log(user.id);
}
welcome({ id: 112, displayName: "Welcome", version: 1 });
function verify(result) {
    if (result === "Pass") {
        console.log("Passed");
    }
    else {
        console.log("Failed");
    }
}
var user = {
    name: "Ashraful",
    id: 112,
};
// example
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user1 = new UserAccount("Ashraful", 102);
console.log(user1);
