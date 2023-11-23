// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, hetergenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 5] = "saveData";
    RequestType[RequestType["deleteData"] = 6] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.saveData);
// console.log(RequestType["deleteData"]);
// string enum
var RequestTypeStr;
(function (RequestTypeStr) {
    RequestTypeStr["readData"] = "READ_DATA";
    RequestTypeStr["saveData"] = "SAVE_DATA";
    RequestTypeStr["deleteData"] = "DELETE_DATA";
})(RequestTypeStr || (RequestTypeStr = {}));
// console.log(RequestTypeStr);
// console.log(RequestTypeStr.saveData);
// console.log(RequestTypeStr["deleteData"]);
// hetergenous enum
var RequestTypeHet;
(function (RequestTypeHet) {
    RequestTypeHet["readData"] = "READ_DATA";
    RequestTypeHet["saveData"] = "SAVE_DATA";
    RequestTypeHet["deleteData"] = "DELETE_DATA";
    RequestTypeHet[RequestTypeHet["id"] = 101] = "id";
})(RequestTypeHet || (RequestTypeHet = {}));
console.log(RequestTypeHet);
