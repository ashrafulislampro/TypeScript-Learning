export class User {
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
