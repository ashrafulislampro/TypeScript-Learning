var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//   let user1 = new User("Ashraful Islam", 24);
//   user1.display();
//   let user2 = new User("Homayra Islam", 19);
//   user2.display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(x, y, studentId) {
        var _this = _super.call(this, x, y) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("userName : ".concat(this.userName, ", age : ").concat(this.age, " studentId : ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student("Ashraful Islam", 24, 123432422);
student1.display();
