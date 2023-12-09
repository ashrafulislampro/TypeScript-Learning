type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const strArry: StringArray = ["Ashraf", "Islam", "Dhrub", "Ashraful"];

const numArray: NumberArray = [1, 2, 3, 4, 5];

const objWithNameArray = [
  { name: "Ashraf" },
  { name: "Ashraful" },
  { name: "Ashraful Islam" },
  "dd",
  34,
  true,
];

// console.log(objWithNameArray);

// dynamic own type

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get();

backpack.add("ashraful");
