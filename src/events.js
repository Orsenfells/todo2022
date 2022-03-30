

let events = () => {

    let sidebarEvents = (projects, dom) => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                console.log(e.target.id)
                projects.setProjectActive(e.target.id)
                dom.render(projects.getData())
            }
            else if(e.target.tagName === 'BUTTON'){
                dom.toggleProjectModal()
            }
        })
    }
    
    let projectModalEvents = (projects, dom) => {
        let modal = document.getElementById('create-project-modal')

        let formatProjectData = (data) => {
            let formatted = {
                project: data.project,
                id: `${Math.random().toString(16).slice(2)}`,
                active: false,
                todos: [] 
            }
            if(data.title){
                formatted.todos.push({
                    title: data.title,
                    id: `${Math.random().toString(16).slice(2)}`,
                    description: data.description,
                    priority: data.priority,
                })
            }
            return formatted
        }
        modal.addEventListener('click', (e) => {
            let element = e.target;
            if(element.tagName === 'BUTTON'){
                e.preventDefault() 
                if(element.id === 'cancel-project-button'){
                    dom.toggleProjectModal()
                }
                else if(element.id === 'add-project-button'){
                    let data = formatProjectData(dom.getModalData())
                    if(!data.project) {
                        return
                    }
                    projects.addProject(data)

                    dom.toggleProjectModal()
                    dom.render(projects.getData())
                }
            } 
        })
    }
    let loadEvents = (projects, dom) => {
        sidebarEvents(projects, dom)
        projectModalEvents(projects, dom)
    }
    return {loadEvents}
}

export default events