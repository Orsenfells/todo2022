import './styles/create-task-modal.css'
import createModal from './createModal'
import todoFieldSet from './todoFieldSet';

let modalContent = () => {
    let form = document.createElement('form');
    let fieldset = todoFieldSet()
    let addTask = document.createElement('button')
    let cancel = document.createElement('button')
    let buttonContainer = document.createElement('div');
    addTask.textContent = 'Add Task';
    cancel.textContent = 'Cancel';
    addTask.id = 'add-task-button';
    cancel.id = 'cancel-task-modal-button'
    buttonContainer.appendChild(cancel)
    buttonContainer.appendChild(addTask)
    
    form.appendChild(fieldset)
    form.appendChild(buttonContainer)
    return form
}
let createTaskModal = () => {
    let modal = createModal('add-task-modal')
    let content = modalContent()
    modal.appendToModal(content)
    let getModal = () => modal.getModal()
    let toggleModalVisibility = () => {
        modal.toggleModalVisibility()
    }
    let getFormData = () => {
        let formData = new FormData(content)
        let formProps = Object.fromEntries(formData)
        
        return formProps
    }
    return {getModal, toggleModalVisibility, getFormData}
}
export default createTaskModal