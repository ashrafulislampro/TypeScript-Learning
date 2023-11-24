function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
// const result = wrapInArray("Ashraful");
var result = wrapInArray(["Ashraful", "Islam"]);
console.log("result = ", result);
