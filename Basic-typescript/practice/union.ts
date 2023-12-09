type MyBool = true | false;

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// const result = wrapInArray("Ashraful");
const result = wrapInArray(["Ashraful", "Islam"]);
console.log("result = ", result);
