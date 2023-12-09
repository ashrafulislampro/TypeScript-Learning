// public, private, protected, readonly
class User {
  // public userName: string;
  // protected userName: string;

  public userName: string;
  public age: number;

  constructor(x: string, y: number) {
    this.userName = x;
    this.age = y;
  }

  display(): void {
    console.log("hi");
  }
}

//   let user1 = new User("Ashraful Islam", 24);
//   user1.display();
//   let user2 = new User("Homayra Islam", 19);
//   user2.display();

class Student extends User {
  private studentId: number;

  constructor(x: string, y: number, studentId: number) {
    super(x, y);
    // this.studentId = studentId;
  }

  display(): void {
    console.log(
      `userName : ${this.userName}, age : ${this.age} studentId : ${this.studentId}`
    );
  }

  setStudentId(id: number): void {
    this.studentId = id;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Ashraful Islam", 24, 123432422);
// student1.display();
student1.setStudentId(20924976365);
console.log(student1.getStudentId());
// let user1 = new User("Ashraful", 3444);
// user1.userName = "Mubarak Hossain";

// console.log("user1 = ", user1);
