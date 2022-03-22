

let events = (projects, dom) => {
    let toggleActiveProject = () => {

    }
    let loadSidebarEvents = () => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                e.target.classList.add('active')
                console.log(e.target.classList)
                projects.setProjectActive(e.target.id)
                dom.render(projects.getData())
            }
            
        })
    }
  
    return {loadSidebarEvents}
}

export default events