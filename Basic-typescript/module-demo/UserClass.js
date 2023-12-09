"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
exports.User = User;
