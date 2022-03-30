

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
        modal.addEventListener('click', (e) => {
            let element = e.target;
            if(element.tagName === 'BUTTON'){
                e.preventDefault() 
                if(element.id === 'cancel-project-button'){
                    dom.toggleProjectModal()
                }
                else if(element.id === 'add-project-button'){
                    
                    // projects.addProject({
                    //     project: 'test-3',
                    //     id: `${Math.random().toString(16).slice(2)}`,
                    //     active: false,
                    //     todos: [{
                    //         title: ``,
                    //         id: 'super-test',
                    //         description: 'descreription',
                    //         priority: 'low',
                    //     }]
                    // })
                    dom.getModalData()
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