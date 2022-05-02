//Button variables
const addBtn = document.querySelector('.add-btn');
const searchBtn = document.querySelector('.search-btn');
//Input variables
//Add task variables
const addTaskInput = document.querySelector('#add-task');
const addTaskForm = document.querySelector('.add-task-form');
//Search bar variable
const searchInput = document.querySelector('#search');
const searchForm = document.querySelector('.search-form');
//Task box variable
const taskBox = document.querySelector('.task-box');
//Task item TW classes
const taskDivTwClasses = ['task-item', 'bg-white',  'flex', 'items-center', 'border-b', 'border-gray-400', 'rounded-lg'];
const taskLiTwClasses = ['task-content', 'w-full', 'px-4', 'py-2', 'dark:border-gray-600'];
const delBtnTwClasses = ['del-item', 'text-red-600', 'pr-4', 'hover:text-red-600'];

//add task on click
addBtn.addEventListener ('click', e => {
    e.preventDefault();
    if (addTaskInput.value) {
    let taskCard = `<li class="task-item bg-white w-full px-4 py-2 flex justify-between items-center border-b border-gray-400 rounded-lg">
    <span class="task-content">${addTaskInput.value}</span>
    <i class="fa-solid fa-trash-can del-item pr-4 hover:text-red-600"></i></li>`

    taskBox.innerHTML += taskCard;
    //reset input text area after submit
    addTaskForm.reset();
    } 
})
//delete task
taskBox.addEventListener ('click', e => {
    if (e.target.classList.contains('del-item')) {
        e.target.parentElement.remove()
    }
})
const filterTask = (searchContent) => {
    console.log(Array.from(taskBox.children));
    //console.log(searchContent)
    Array.from(taskBox.children)
        .filter((toDo) => {
            //console.log(toDo.textContent.trim().includes(searchContent));
            // return true;
            return !toDo.textContent.toLowerCase().includes(searchContent);
        })
        .forEach(toDo => toDo.classList.add('hidden'))

        Array.from(taskBox.children)
        .filter(toDo => toDo.textContent.toLowerCase().includes(searchContent))
        .forEach(toDo => toDo.classList.remove('hidden'))
        
}
//Search task
searchInput.addEventListener('keyup', e => {
    let searchContent = searchInput.value.trim().toLowerCase();
    //console.log(searchContent);
    filterTask(searchContent);
    
})