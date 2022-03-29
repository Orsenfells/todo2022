// import projectData from './project-data'


let projectData = (() => {
    let projects = [{
        project: 'test',
        id: 'dsd',
        active: true,
        todos: [{
            title: 'testTodo',
            id: 'test',
            description: 'descreription',
            priority: 'sda',
        }]
    },
    {
        project: 'test-2',
        id: 'tests',
        active: false,
        todos: [{
            title: 'Super test',
            id: 'super-test',
            description: 'descreription',
            priority: 'low',
        }]
    },];

    let getProjects = () => projects;

    let setActive = (id) => {
        projects.forEach(data => {
            if(data.id === id) {
                data.active = true;
            }
        })
    }
    let setAllProjectsInactive = () => {
        projects.forEach(data => {
            data.active = false
        })
    }
    let addProject = (project) => projects.push(project)

    return {getProjects, addProject, setActive, setAllProjectsInactive}
})()

let projectController = () => {
    

    let setProjectActive = (id) => {
            projectData.setAllProjectsInactive()
            return projectData.setActive(id)
        }
    let addProject = (project) => projectData.addProject(project)
    let getData = () => {
        console.log(this)
        return projectData.getProjects()
    }
    return {getData, setProjectActive, addProject}
}


export default projectController