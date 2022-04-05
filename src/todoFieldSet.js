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

let todoFieldSet = () => {
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

export default todoFieldSet