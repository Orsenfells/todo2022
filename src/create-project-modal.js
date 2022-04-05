import './styles/create-project-modal.css'
import createModal from './createModal'
import createTodoFieldSet from './todoFieldSet'

let modalContent = () => {
    let form = document.createElement('form');
    let todoFieldset = createTodoFieldSet()
    let heading = document.createElement('h3');
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    let buttonContainer = document.createElement('div');
    let cancelButton = document.createElement('button');
    let addProjectButton = document.createElement('button');
    form.className = 'modal-content';
    heading.className = 'heading';
    buttonContainer.className = 'button-container';
    cancelButton.id = 'cancel-project-button';
    addProjectButton.id = 'add-project-button';
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(addProjectButton);
    heading.textContent = 'Add Project';
    nameInput.id = 'nameInput'
    nameLabel.textContent = 'Project Name';
    nameLabel.htmlFor = 'nameInput';
    nameInput.name = 'project';
    cancelButton.textContent = 'Cancel';
    addProjectButton.textContent = 'Add Project';

    let formChildren = [heading, nameLabel, nameInput, todoFieldset, buttonContainer]
    formChildren.forEach(child => form.appendChild(child))
    return form
}

let createProjectModal = () => {
    let form = modalContent();
    let modal = createModal('create-project-modal')
    modal.appendToModal(form)

    let getModal = () => modal.getModal()
    let toggleModalVisibility = () => {
        modal.toggleModalVisibility()
    }
    let getFormData = () => {
        let formData = new FormData(form)
        let formProps = Object.fromEntries(formData)
        
        return formProps
    }
    return {getModal, toggleModalVisibility, getFormData}
}


export default createProjectModal