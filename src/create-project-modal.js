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
let modalContent = () => {
    let form = document.createElement('form');
    
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
    nameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    addProjectButton.textContent = 'Add Project';
    let formChildren = [heading, nameLabel, nameInput, buttonContainer]
    formChildren.forEach(child => form.appendChild(child))
    return form
}

let createProjectModal = () => {
    
    let modal = createModal()
    modal.appendToModal(modalContent())
    let getModal = () => modal.getModal()
    let toggleModalVisibility = () => {
        modal.toggleModalVisibility()
    }
    return {getModal, toggleModalVisibility}
}


export default createProjectModal