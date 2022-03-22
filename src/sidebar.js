import './styles/sidebar.css'

let sidebar = function() {
    let sidebar = document.createElement('div')
    let projectList = document.createElement('ul')
    sidebar.appendChild(projectList)
    sidebar.className = 'sidebar'

    let createProject = (project, active) => {
        let li = document.createElement('li');
        if(active){
            li.classList.add('active')
        }
        li.textContent = project;
    
        li.id = project
        projectList.appendChild(li) 
    }
    
    let addProject = (project, active) => {       
            createProject(project, active)
    }
    let removeAllChildren = () => {
        while(projectList.firstChild) {
            projectList.removeChild(projectList.lastChild)
        }
    }

    const getSidebar = () => sidebar

    return {getSidebar, addProject, removeAllChildren}
}

export default sidebar