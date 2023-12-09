interface Person {
  name: string;
  address?: {
    street?: string;
    city?: string;
  };
}

const person: Person = {
  name: "Ashraful",
};

const city = person.address?.city;
console.log("city=", city);
