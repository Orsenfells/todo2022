import './styles/index.css'
import createTodoContainer from "./todo-container";
import createTodo from './create-todo'
import header from "./header";
import loadSidebar from "./sidebar";
import createProjectModal from './create-project-modal';
let addTodoButton = () => {
    let button = document.createElement('button')
    button.textContent = 'Add Task'
    button.className = 'add-task-button'
    return button
}
let addTask = addTodoButton()
let domController = () => {
    let todoContainer = createTodoContainer()
    let sidebar = loadSidebar()
    let projectModal = createProjectModal()
    let mainContainer = document.createElement('div');
    mainContainer.className = 'main-container'
    let initialLoad = () => {
        let page = document.querySelector('.content');
        let main = document.createElement('main');
        mainContainer.appendChild(todoContainer.getContainer())
        mainContainer.appendChild(addTask)
        page.appendChild(header());
        page.appendChild(main)
        main.appendChild(sidebar.getSidebar());
        main.appendChild(mainContainer)
        page.appendChild(projectModal.getModal())
    }
    let handleProjectData = (data) => {
        sidebar.addProject(data.project, data.active, data.id)
        if(data.active) {
            data.todos.forEach(todo => {
                todoContainer.appendToContainer(createTodo(todo))
            })
        }
    }

    let render = (data) => {
        sidebar.removeAllChildren()
        todoContainer.removeAllChildren()
        data.forEach(project => handleProjectData(project))
    }
    let toggleProjectModal = () => {
        projectModal.toggleModalVisibility();
    }
    let getModalData = () => {
        console.log(projectModal.getFormData())
        return projectModal.getFormData()
    }
    return {initialLoad, render, toggleProjectModal, getModalData}
}

export default domController