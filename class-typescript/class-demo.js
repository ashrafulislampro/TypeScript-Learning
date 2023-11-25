var User = /** @class */ (function () {
    function User(x, y) {
        this.userName = x;
        this.age = y;
    }
    User.prototype.display = function () {
        console.log("userName : ".concat(this.userName, ", age : ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Ashraful Islam", 24);
user1.display();
var user2 = new User("Homayra Islam", 19);
user2.display();
