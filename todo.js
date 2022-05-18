const todoName = document.querySelector("#todo-name");
const todoDate = document.querySelector("#todo-date");
let table = document.querySelector(".table");
let tBody = document.querySelector(".table-body");
// const button = document.querySelector(".button");

// Data structure
let todoList = []; // Starting with an empty array
localStorage.setItem('todos', JSON.stringify(todoList)); // sending the array to the local storage
let storedTodos = localStorage.getItem('todos');
todoList = JSON.parse(storedTodos);

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
        ).join("") // to remove commas between array elements
}


// Adding a todo to the list
const addTodo = function () {
    const nameTodo = todoName.value.trim(); // moving white spaces
    const dateTodo = todoDate.value; // changing string to date object
    const newTodo = {
        nameTodo: nameTodo,
        dateTodo: dateTodo
    }
    if (nameTodo !== "" && dateTodo !== "") {
        // getting the list from the local storage
        let storedTodos = localStorage.getItem('todos');
        todoList = JSON.parse(storedTodos);

        todoList.push(newTodo); // adding new ToDo to the list

        localStorage.setItem('todos', JSON.stringify(todoList)); // sending new ToDo list back to the local storage

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your ToDo has been added!',
            showConfirmButton: false,
            timer: 1200
        })
    }
    else {
        // alert("Please do not forget to enter a todo or the deadline!")
        Swal.fire(
            'All fields filled?',
            'Please enter both a TODO and a DEADLINE!',
            'question'
        )
    }
    formRows(todoList);
    // clearing input values
    todoName.value = "";
    todoDate.value = "";

    console.log(todoList)

}


// Removing ToDos from the list
function deleteTodo(index) {
    let selectedId = index;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert your ToDo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.isConfirmed) {
            // getting the list from the local storage
            let storedTodos = localStorage.getItem('todos');
            todoList = JSON.parse(storedTodos);

            // deleting clicked item
            let removedList = todoList.filter(todo => todoList.indexOf(todo) !== selectedId);
            todoList = removedList;

            // sending new ToDo list back to the local storage
            localStorage.setItem('todos', JSON.stringify(todoList));

            formRows(todoList)
            console.log(todoList)

            Swal.fire(
                'Deleted!',
                'Your ToDo has been deleted.',
                'success'
            )
        }
    })

}


// Sorting ToDos by string expression
function sortByToDo() {
    // getting the list from the local storage
    let storedTodos = localStorage.getItem('todos');
    todoList = JSON.parse(storedTodos);

    // sorting the ToDo list by name
    todoList
        .sort((a, b) => (a.nameTodo > b.nameTodo) ? 1 : ((b.nameTodo > a.nameTodo) ? -1 : 0));

    // sending new ToDo list back to the local storage
    localStorage.setItem('todos', JSON.stringify(todoList));

    // Rendering the sorted list
    formRows(todoList);
    console.log(todoList)
}

// sort todos by date
function sortByDate() {
    // getting the list from the local storage
    let storedTodos = localStorage.getItem('todos');
    todoList = JSON.parse(storedTodos);

    // sorting the ToDo list by date
    todoList
        .sort((a, b) => new Date(a.dateTodo) - new Date(b.dateTodo));

    // sending new ToDo list back to the local storage
    localStorage.setItem('todos', JSON.stringify(todoList));

    // Rendering the sorted list
    formRows(todoList);
    console.log(todoList)
}


