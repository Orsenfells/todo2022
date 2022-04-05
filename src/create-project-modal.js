import './styles/create-project-modal.css'
import createModal from './createModal'
import createTodoFieldSet from './todoFieldSet'
let createRadioOption = (id) => {
    let div = document.createElement('div');
    div.id = `radio-option-${id}`;
    let input = document.createElement('input');
    input.type = 'radio';
    input.id = id;
    input.name = `priority`
    input.value = id
    let label = document.createElement('label');
    label.htmlFor = id
    label.textContent = id
    div.appendChild(input);
    div.appendChild(label);
    return div;
}

let addTodoFieldSet = () => {
    let descriptionId = `${Math.random().toString(16).slice(2)}`
    let todoId = `${Math.random().toString(16).slice(2)}`
    let fieldset = document.createElement('fieldset')
    let addTodoHeading = document.createElement('h3');
    let todoLabel = document.createElement('label'); 
    let todoInput = document.createElement('input');
    let radio = document.createElement('div');
    let radioHeading = document.createElement('h3');
    let highPriority = createRadioOption('High')
    let lowPriority = createRadioOption('Low')
    let descriptionLabel = document.createElement('label')
    let descriptionInput = document.createElement('textarea');

    fieldset.name = 'todo'
    addTodoHeading.textContent = 'Add Todo'
    radioHeading.textContent = 'Priority'
    radio.appendChild(radioHeading)
    radio.appendChild(highPriority);
    radio.appendChild(lowPriority);
    radio.name = 'priority'
    descriptionInput.id = descriptionId;
    descriptionInput.name = 'description'
    descriptionLabel.textContent = 'Description';
    descriptionLabel.htmlFor = descriptionId;
    todoInput.id = todoId;
    todoInput.name = 'title';
    todoLabel.htmlFor = todoId
    todoLabel.textContent = 'Todo'
    let fieldsetChildren = [addTodoHeading, todoLabel, todoInput, descriptionLabel, descriptionInput, radio]
    fieldsetChildren.forEach(child => fieldset.appendChild(child))
    return fieldset
}
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