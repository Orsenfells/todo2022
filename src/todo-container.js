import './styles/todo-container.css'


let todoContainer = () => {
    let todoContainer = document.createElement('div');
    todoContainer.className = 'todo-container';
    
    let getContainer = () => todoContainer
    let appendToContainer = (element) => {
        todoContainer.appendChild(element)
    }
    let removeAllChildren = () => {
        while(todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.lastChild)
        }
    }
    return {getContainer, appendToContainer, removeAllChildren}
}

export default todoContainer