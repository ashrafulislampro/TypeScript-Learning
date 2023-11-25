class User {
  userName: string;
  age: number;

  constructor(x: string, y: number) {
    this.userName = x;
    this.age = y;
  }

  display(): void {
    console.log(`userName : ${this.userName}, age : ${this.age}`);
  }
}

//   let user1 = new User("Ashraful Islam", 24);
//   user1.display();
//   let user2 = new User("Homayra Islam", 19);
//   user2.display();

class Student extends User {
  studentId: number;

  constructor(x: string, y: number, studentId: number) {
    super(x, y);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `userName : ${this.userName}, age : ${this.age} studentId : ${this.studentId}`
    );
  }
}

let student1 = new Student("Ashraful Islam", 24, 123432422);
student1.display();
