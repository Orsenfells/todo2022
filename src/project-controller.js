// import projectData from './project-data'


let projectData = (() => {
    let projects = [{
        project: 'test',
        active: true,
        todos: [{
            title: 'testTodo',
            description: 'descreription',
            priority: 'sda',
        }]
    }];

    let getProjects = () => projects;

    let addProject = (project) => projects.push(project)

    return {getProjects, addProject}
})()

let projectController = () => {
    
    
    let data = {projects: projectData.getProjects()}
    // console.log(projectData.getProjects())
    // projectData.addProject({})
    // console.log(projectData.getProjects())

    let getData = () => projectData.getProjects()
    console.log(projectData.getProjects())
    return {getData}
}

[
    {
        project: 'test',
        active: false,
        todos: [{
            title: 'testTodo',
            description: 'descreription',
            priority: 'sda',
        }]
    }
]
export default projectController