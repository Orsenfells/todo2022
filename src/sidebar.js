import './styles/sidebar.css'

let sidebar = function() {
    let sidebar = document.createElement('div')
    let projectList = document.createElement('ul')
    sidebar.appendChild(projectList)
    sidebar.className = 'sidebar'

    let createProject = (project) => {
        let div = document.createElement('li');
        div.textContent = project;
        projectList.appendChild(div) 
        
    }
    
    let updateSidebar = (project) => {
            
            createProject(project)
 
        // createProject('projects[0]')
    }


    const getSidebar = () => sidebar

    return {getSidebar, updateSidebar}
}

export default sidebar