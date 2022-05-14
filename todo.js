const todoName = document.querySelector("#todo-name");
const todoDate = document.querySelector("#todo-date");
let table = document.querySelector(".table");
let tBody = document.querySelector(".table-body");

function formRows(pList) {
    return tBody.innerHTML = pList
        .map((todo, index) => {
            return `
            <tr>
                <th scope="row" class="col-num">${index + 1}</th>
                <td class="col-todo">${todo.nameTodo}</td>
                <td class="col-date">${todo.dateTodo}</td>
                <td class="delete"><i class="fa-solid fa-trash-can"></i></td>
            </tr>
            `
        }

        ).join("")
}

// Add new todos to the to the list
let todoList = [
];

// if (todoList.length !== 0) {
//     table.innerHTML = `
//     <h2>...Your ToDo list is empty....</>`
// }

const addTodo = function () {
    const nameTodo = todoName.value.trim(); // moving white spaces
    const dateTodo = todoDate.value; // moving white spaces
    const newTodo = {
        nameTodo: nameTodo,
        dateTodo: dateTodo
    }
    if (nameTodo !== "" && dateTodo !== "") {
        todoList.push(newTodo); // preventing to input empty values

        // todoName.reset(); FIND THE SOLUTION!!!!!!!!!!!!
    }
    formRows(todoList);
}




// formRows(todoList);

// // Adding rows to the table
// function addRows(Array) {
//     let owlCarousel = document.querySelector('.owl-carousel');
//     owlCarousel.innerHTML = addCards(Array);
//     return owlCarousel;
// }

// render(todoList);




// const addForm = document.querySelector(".add");
// const list = document.querySelector("todos");
// const addButton = document.querySelector(".btn");
// let html = "";
// // Add new list element to HTML
// let generateTemplate = todo => {

//     let Li = `
//     <li
//     class="
//       list-group-item
//       d-flex
//       justify-content-between
//       align-items-center
//     "
//   >
//     <span>${todo}</span>
//     <i class="far fa-trash-alt delete"></i>
//   </li>
//     `;

//     html += Li;

//     list.innerHTML =`
//          <ul class="todos list-group mx-auto text-light">
//              ${html}
//          </ul>`
// };

// // Input new value to the list
// addButton.addEventListener("click", e => {

//     e.preventDefault();
//     const todo = addForm.add.value;

//     if(todo.length){
//         generateTemplate(todo);
//         addForm.reset();
//     }

// });

// list.addEventListener("click", e => {
//     if (    e.target.classList.contains('delete')){
//         e.target.parentElement.remove();
//     }});





// const addButton = document.querySelector("#add-todo");
// const todoList = document.querySelector("#todo-list");
// addButton.addEventListener("click", newTodo);
// const row =
// const deleteRow = document.querySelector("#delete-row");
// deleteRow.addEventListener("click", removeRow);

// let html = "";

// function newTodo(){
//     todo = document.querySelector("#new-todo").value;
//     if (todo !== ""){

//         // priority setting
//         let priority = "";

//         let row = `
//             <tr>
//                 <td class="todo">${todo}</td>
//                 <td class="priority"><span>high</span></td>
//                 <td class="date">today</td>
//                 <td><i class="fas fa-trash-alt"></i></td>
//             </tr>
//             `
//         html += row;
//         document.querySelector("#new-todo").value = "";

//         todoList.innerHTML =`
//         <tbody id="todo-list">
//             ${html}
//         </tbody>
//         `
//     }
//     else{
//         alert("Please type in the box something to do");
//     }
// }