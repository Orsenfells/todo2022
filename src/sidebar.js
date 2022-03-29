import './styles/sidebar.css'
let projectButton = () => {
    let addProjectButton = document.createElement('button')
    addProjectButton.className = 'addProject'
    addProjectButton.textContent = 'New Project'
    return addProjectButton
}
let sidebar = function() {
    let sidebar = document.createElement('div')
    let projectList = document.createElement('ul')
    sidebar.appendChild(projectList)
    sidebar.className = 'sidebar'

    sidebar.appendChild(projectButton())
    let createProject = (project, active, id) => {
        let li = document.createElement('li');
        if(active){
            li.classList.add('active')
        }
        li.textContent = project;
        li.id = id;
        projectList.appendChild(li) 
    }
    
    let addProject = (project, active, id) => {       
            createProject(project, active, id)
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