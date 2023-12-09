// Example 1
interface Color {
  title: string;
}
interface Color {
  text: string;
}
// now class A has access to title and string
class A implements Color {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
  display(): void {
    console.log(`title: ${this.title}, text: ${this.text}`);
  }
}

const AB = new A("Ashraful", "islam");
// AB.display();

// Example 2

interface IFUser {
  name: string;
}

interface IFStudent extends IFUser {
  student_id: string;
}

// Extending a type via intersections
type User = {
  name: string;
};

type Student = User & {
  student_id: string;
};

class Students implements Student {
  name: string;
  student_id: string;
  age: number;
  constructor(name: string, student_id: string, age: number) {
    this.name = name;
    this.student_id = student_id;
    this.age = age;
  }

  printDetails = () => {
    return `${this.name}, ${this.student_id}, ${this.age}`;
  };
}

const student1 = new Students("anisul12 islam", "1302", 24);

console.log(student1.printDetails());

let s1: IFStudent;
s1 = {
  name: "anisul islam",
  student_id: "1302",
};
