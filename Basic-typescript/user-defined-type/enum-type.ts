// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, hetergenous

// numeric enum

enum RequestType {
  readData = 1,
  saveData = 5,
  deleteData,
}

// console.log(RequestType);
// console.log(RequestType.saveData);
// console.log(RequestType["deleteData"]);

// string enum
enum RequestTypeStr {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  deleteData = "DELETE_DATA",
}
// console.log(RequestTypeStr);
// console.log(RequestTypeStr.saveData);
// console.log(RequestTypeStr["deleteData"]);

// hetergenous enum
enum RequestTypeHet {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  deleteData = "DELETE_DATA",
  id = 101,
}

console.log(RequestTypeHet);
