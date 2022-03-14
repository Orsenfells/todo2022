import './styles/index.css'
import createTodoContainer from "./todo-container";
import createTodo from './create-todo'
import header from "./header";
import loadSidebar from "./sidebar";
let domController = () => {
    let todoContainer = createTodoContainer()
    let projects 
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
        console.log(data)
        sidebar.updateSidebar(data.project)
        if(data.active) {
            data.todos.forEach(todo => {
                todoContainer.appendToContainer(createTodo(todo))
            })
        }
    }
    let render = (data) => {
        data.forEach(project => handleProjectData(project))
        // sidebar.updateSidebar(data.projects)
    }
    

    return {initialLoad, render}
}

export default domController