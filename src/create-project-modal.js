import './styles/create-project-modal.css'

let modal = (() => {
    let modal = document.createElement('div');
    modal.className = 'modal';
    return modal
})()
let modalContent = () => {
    let form = document.createElement('form');
    
    let heading = document.createElement('h3');
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    let buttonContainer = document.createElement('div');
    ;
    let cancelButton = document.createElement('button');
    let submitButton = document.createElement('button');
    form.className = 'modal-content';
    heading.className = 'heading'
    buttonContainer.className = 'button-container';
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(submitButton);
    heading.textContent = 'Add Project';
    nameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    submitButton.textContent = 'Submit';
    let formChildren = [heading, nameLabel, nameInput, buttonContainer]
    formChildren.forEach(child => form.appendChild(child))
    return form
}
let createProjectModal = () => {
    modal.appendChild(modalContent())
    return modal
}

export default createProjectModal