const listContainer = document.querySelector(".list");
const inputForm = document.querySelector("#add-todo");
const table = document.querySelector(".table");
const tHead = document.querySelector(".table-head");
const tBody = document.querySelector(".table-body");
const submitButton = document.querySelector(".submit");

let todoList = [];

const addTodo = function () {
    const newValue = inputForm.value.trim(); // moving white spaces
    if (newValue !== "") {
        todoList.push(newValue); // preventing to input empty values
    }
    console.log(todoList)
}

const addTBody = function (pList) {
    tBody.innerHTML += pList.map(todo => {
        return `
  <tr>
    <th scope="row" class="col-num">1</th>
    <td class="col-todo">${todo}</td>
    <!-- <td class="third-column">Otto</td> -->
    <td class="delete"><i class="fa-solid fa-trash-can"></i></td>
  </tr>
  `;
    })
}

console.log(addTBody(todoList));




// function addTemplate() {
//   return table.innerHTML = `
//   ${addThead()}
//   ${addTBody()}
//   `
// }









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

