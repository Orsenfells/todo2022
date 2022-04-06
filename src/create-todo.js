import './styles/todo.css';

let createTodo = (data) => {
    let todo = document.createElement('div');
    let title = document.createElement('h1');
    let description = document.createElement('p');
    let priority = document.createElement('div');
    let duedate = document.createElement('div')
    todo.className = 'container'
    duedate.textContent = data.duedate
    title.textContent = data.title;
    description.textContent = data.description;
    priority.textContent = data.priority
    let complete = document.createElement("input")   
    complete.type = 'checkbox'

    let appendToTodo = [title, description, priority, duedate, complete ]
    appendToTodo.forEach(element => todo.appendChild(element))

    return todo
}

export default createTodo