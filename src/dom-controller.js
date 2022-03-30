import './styles/index.css'
import createTodoContainer from "./todo-container";
import createTodo from './create-todo'
import header from "./header";
import loadSidebar from "./sidebar";
import createProjectModal from './create-project-modal';
let domController = () => {
    let todoContainer = createTodoContainer()
    let sidebar = loadSidebar()
    let projectModal = createProjectModal()
    let initialLoad = () => {
        let page = document.querySelector('.content');
        let main = document.createElement('main');
        

        page.appendChild(header());
        page.appendChild(main)
        main.appendChild(sidebar.getSidebar());
        main.appendChild(todoContainer.getContainer())
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
    }
    return {initialLoad, render, toggleProjectModal, getModalData}
}

export default domController