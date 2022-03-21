

let events = (projects, dom) => {
    let toggleActiveProject = () => {

    }
    let loadSidebarEvents = () => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                projects.setProjectActive(e.target.id)
                dom.render(projects.getData())
            }
            
        })
    }
  
    return {loadSidebarEvents}
}

export default events