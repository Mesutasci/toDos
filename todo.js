const todoName = document.querySelector("#todo-name");
const todoDate = document.querySelector("#todo-date");
let table = document.querySelector(".table");
let tBody = document.querySelector(".table-body");

// Data structure
let todoList = [
];

// Forming table rows
function formRows(pList) {
    return tBody.innerHTML = pList
        .map((todo, index) => {
            return `
            <tr>
                <th scope="row" class="col-num">${index + 1}</th>
                <td class="col-todo">${todo.nameTodo}</td>
                <td class="col-date">${todo.dateTodo}</td>
                <td class="delete"><i class="fa-solid fa-trash-can" onclick="deleteTodo(${index})"></i></td>
            </tr>
            `
        }

        ).join("")
}

// Adding a todo to the list
const addTodo = function () {
    const nameTodo = todoName.value.trim(); // moving white spaces
    const dateTodo = todoDate.value; // moving white spaces
    const newTodo = {
        // id: todoList.length, // id of the each list objects
        nameTodo: nameTodo,
        dateTodo: dateTodo
    }
    if (nameTodo !== "" && dateTodo !== "") {
        todoList.push(newTodo); // preventing to input empty values

        // todoName.reset(); FIND THE SOLUTION!!!!!!!!!!!!
    }
    formRows(todoList);
}

// Removing ToDos from the list
function deleteTodo(index) {
    let selectedId = index;
    console.log("deleted todo:", selectedId);
    console.log(todoList);
    let filteredList = todoList.filter((todo, index) => todoList.indexOf(todo) !== selectedId);
    todoList = filteredList;
    console.log(todoList);
    formRows(todoList)
}