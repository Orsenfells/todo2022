

let events = (projects, dom) => {

    let loadSidebarEvents = (projects, dom) => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                projects.setProjectActive(e.target.id)
                dom.render(projects.getData())
            }
            
        })
    }
    let loadEvents = () => {
         loadSidebarEvents(projects, dom)

    }
    return {loadEvents}
}

export default events