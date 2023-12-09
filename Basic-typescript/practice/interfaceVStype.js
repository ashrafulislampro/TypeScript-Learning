// now class A has access to title and string
var A = /** @class */ (function () {
    function A(title, text) {
        this.title = title;
        this.text = text;
    }
    A.prototype.display = function () {
        console.log("title: ".concat(this.title, ", text: ").concat(this.text));
    };
    return A;
}());
var AB = new A("Ashraful", "islam");
var Students = /** @class */ (function () {
    function Students(name, student_id, age) {
        var _this = this;
        this.printDetails = function () {
            return "".concat(_this.name, ", ").concat(_this.student_id, ", ").concat(_this.age);
        };
        this.name = name;
        this.student_id = student_id;
        this.age = age;
    }
    return Students;
}());
var student1 = new Students("anisul12 islam", "1302", 24);
console.log(student1.printDetails());
var s1;
s1 = {
    name: "anisul islam",
    student_id: "1302",
};
