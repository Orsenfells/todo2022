import './styles/todo-container.css'

let todoContainer = () => {
    let todoContainer = document.createElement('div');
    todoContainer.className = 'todo-container';

    let getContainer = () => todoContainer
    let appendToContainer = (element) => {
        todoContainer.appendChild(element)
    }
    return {getContainer, appendToContainer}
}

export default todoContainer