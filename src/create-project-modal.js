import './styles/create-project-modal.css'

let createModal = () => {
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'create-project-modal';

    let toggleModalVisibility = () => {
        if(modal.style.display === 'none' || !modal.style.display){
            modal.style.display = 'flex';
        } else modal.style.display = 'none'
    }
    let getModal = () => modal;
    let appendToModal = (child) => modal.appendChild(child)
    return {getModal, toggleModalVisibility, appendToModal}
}
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
    let fieldset = document.createElement('fieldset')
    let addTodoHeading = document.createElement('h3');
    let radio = document.createElement('div');
    let radioHeading = document.createElement('h3');
    let highPriority = createRadioOption('High')
    let lowPriority = createRadioOption('Low')
    let descriptionLabel = document.createElement('label')
    let descriptionInput = document.createElement('textarea');

    addTodoHeading.textContent = 'Add Todo'
    radioHeading.textContent = 'Priority'
    radio.appendChild(radioHeading)
    radio.appendChild(highPriority);
    radio.appendChild(lowPriority);
    radio.name = 'priority'
    descriptionInput.id = 'descriptionInput';
    descriptionInput.name = 'description'
    descriptionLabel.textContent = 'Description';
    descriptionLabel.htmlFor = 'descriptionInput';
    let fieldsetChildren = [addTodoHeading, descriptionLabel, descriptionInput, radio]
    fieldsetChildren.forEach(child => fieldset.appendChild(child))
    return fieldset
}
let modalContent = () => {
    let form = document.createElement('form');
    let todoFieldset = addTodoFieldSet()
    let heading = document.createElement('h3');
    // let addTodoHeading = document.createElement('h3');
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    // let descriptionLabel = document.createElement('label')
    // let descriptionInput = document.createElement('textarea');
    let buttonContainer = document.createElement('div');
    // let radio = document.createElement('div');
    // let radioHeading = document.createElement('h3');
    // let highPriority = createRadioOption('High')
    // let lowPriority = createRadioOption('Low')
    let cancelButton = document.createElement('button');
    let addProjectButton = document.createElement('button');

    // addTodoHeading.textContent = 'Add Todo'
    form.className = 'modal-content';
    heading.className = 'heading';
    buttonContainer.className = 'button-container';
    cancelButton.id = 'cancel-project-button';
    addProjectButton.id = 'add-project-button';
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(addProjectButton);
    // radioHeading.textContent = 'Priority'
    // radio.appendChild(radioHeading)
    // radio.appendChild(highPriority);
    // radio.appendChild(lowPriority);
    // radio.name = 'priority'
    heading.textContent = 'Add Project';
    nameInput.id = 'nameInput'
    nameLabel.textContent = 'Project Name';
    nameLabel.htmlFor = 'nameInput';
    nameInput.name = 'project-name';
    // descriptionInput.id = 'descriptionInput';
    // descriptionInput.name = 'description'
    // descriptionLabel.textContent = 'Description';
    // descriptionLabel.htmlFor = 'descriptionInput';
    cancelButton.textContent = 'Cancel';
    addProjectButton.textContent = 'Add Project';

    let formChildren = [heading, nameLabel, nameInput, todoFieldset, buttonContainer]
    formChildren.forEach(child => form.appendChild(child))
    return form
}

let createProjectModal = () => {
    let form = modalContent();
    let modal = createModal()
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