
let projectData = () => {
    let projects = [];

    let getProjects = () => projects;

    let addProject = (project) => projects.push(project)

    return {getProjects, addProject}
}

export default projectData