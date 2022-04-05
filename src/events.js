

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
                    let data = formatProjectData(dom.getProjectModalData())
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
    let taskModalEvents = (projects, dom ) => {
        let modal = document.getElementById('add-task-modal');

        modal.addEventListener('click', (e) => {
            let element = e.target
            if(element.tagName === 'BUTTON') {
                e.preventDefault()
                if(element.id === 'cancel-task-modal-button'){
                    dom.toggleTaskModal()
                }
                else if(element.id === 'add-task-button') {
                    let index = projects.getData().findIndex(project => project.active)
                    let data = dom.getTaskModalData()
                    data.id = `${Math.random().toString(16).slice(2)}`
                    projects.addTodo(index, data)
                    console.log(projects.getData())
                    dom.render(projects.getData())
                }
            }
        })
    }
    let taskButtonEvent = (dom) => {
        
        let button = document.getElementById('add-task-button');

        button.addEventListener( 'click', (e) =>{
            dom.toggleTaskModal()
        } )
        //  let projectData = projects.getData()
         
        //  let addTask = document.getElementById('add-task-button');
        //  addTask.addEventListener('click', () => {
        //     let index = projectData.findIndex(project => project.active)
        //     console.log(index)
        //     projects.addTodo(index)
        //     dom.render(projects.getData())
        //  })
         
    }
    
     
    let loadEvents = (projects, dom) => {
        sidebarEvents(projects, dom)
        projectModalEvents(projects, dom)
        taskButtonEvent(dom)
        taskModalEvents(projects, dom)
    }
    return {loadEvents}
}

export default events