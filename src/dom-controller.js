import './styles/index.css'
import createTodoContainer from "./todo-container";
import createTodo from './create-todo'
import header from "./header";
import loadSidebar from "./sidebar";
let domController = () => {
    let todoContainer = createTodoContainer()
    let sidebar = loadSidebar()
    let initialLoad = () => {
        let page = document.querySelector('.content');
        let main = document.createElement('main');
        

        page.appendChild(header());
        page.appendChild(main)
        main.appendChild(sidebar.getSidebar());
        main.appendChild(todoContainer.getContainer())
    }
    let handleProjectData = (data) => {
        sidebar.addProject(data.project)
        if(data.active) {
            data.todos.forEach(todo => {
                todoContainer.appendToContainer(createTodo(todo))
            })
        }
    }
    function removeAllChildren(node) {
        while(node.firstChild) {
            node.removeChild(node.lastChild)
        }
    }
    let render = (data) => {
        sidebar.removeAllChildren()
        todoContainer.removeAllChildren()
        data.forEach(project => handleProjectData(project))
        // sidebar.updateSidebar(data.projects)
    }
    

    return {initialLoad, render}
}

export default domController