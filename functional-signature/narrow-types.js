function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos found");
    }
}
var todos = ["todo1", "todo2"];
printTodos(null);