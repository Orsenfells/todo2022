import './styles/sidebar.css'

let sidebar = function() {
    let sidebar = document.createElement('div')
    let projectList = document.createElement('ul')
    sidebar.appendChild(projectList)
    sidebar.className = 'sidebar'

    let createProject = (project) => {
        let li = document.createElement('li');
        li.textContent = project;
        li.id = project
        projectList.appendChild(li) 
    }
    
    let addProject = (project) => {       
            createProject(project)
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