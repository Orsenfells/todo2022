

let events = (projects, dom) => {

    let sidebarEvents = (projects, dom) => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
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
            } 
        })
    }
    let loadEvents = () => {
        sidebarEvents(projects, dom)
        projectModalEvents(projects, dom)
    }
    return {loadEvents}
}

export default events