function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

const total: number = sum(1, 4, 5, 6, 9);
console.log(total);
