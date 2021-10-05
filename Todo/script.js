// target all necessary element
// listen on the input elememt --> onkeyup
// listen on the btn elememt --> onclick
// show the list of task
//show the number of pending tasks


const inputField = document.querySelector('.inputField input');
const addbutton = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const pendingTask = document.querySelector('.pendingTasks');


inputField.onkeyup = () => {
    let todoValue = inputField.value;

    if (todoValue.trim() != 0) {
        addbutton.classList.add('active')
    } else {
        addbutton.classList.remove('active')
    }
}

displayTasks(); // showind the existing task function



addbutton.onclick = () => { // what to do when the button is clicked
    let todoArray;
    let todoValue = inputField.value; // get the value from the input
    let getLocalStorageTododata = localStorage.getItem("Task list");
    console.log('local storage', getLocalStorageTododata)

    if (getLocalStorageTododata == null) { // checkn if local storage is null
        todoArray = []
    } else {
        todoArray = JSON.parse(getLocalStorageTododata)
    };

    todoArray.push(todoValue)


    localStorage.setItem('Task list', JSON.stringify(todoArray))

    displayTasks() // display the list of tasks

    addbutton.classList.remove('active') // remove the active class from the button
}

function displayTasks() { // function to display task
    let getLocalStorageTododata = localStorage.getItem("Task list");

    let todoArray;
    if (getLocalStorageTododata == null) { // checkn if local storage is null
        todoArray = []
    } else {
        todoArray = JSON.parse(getLocalStorageTododata)
    };
    pendingTask.textContent = todoArray.length

    let listTag = ''
    for (let task of todoArray) {
        listTag += `<li> ${task}</li>`
    }
    todoList.innerHTML = listTag // add new li tag inside ul tag
    inputField.value = '' // empty the input box after adding a task

    // for fending task




}


// inputField.onblur = () => {

//     inputField.classList.remove()
// }



