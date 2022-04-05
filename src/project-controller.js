// import projectData from './project-data'


let projectData = (() => {
    let projects = [{
        project: 'Add Todo',
        id: 'dsd',
        active: true,
        todos: [{
            title: 'add todo button',
            id: 'test',
            description: 'Description',
            priority: 'High',
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

    let addTodo = (index, todo) => {
        projects[index].todos.push(todo)
    }
    return {getProjects, addProject, setActive, setAllProjectsInactive, addTodo}
})()

let projectController = () => {
    
    let addTodo = (index, todo) => projectData.addTodo(index, {
        title: 'Add task test',
        id: 'super-test',
        description: 'Testing add task button',
        priority: 'low',
    })

    let setProjectActive = (id) => {
            projectData.setAllProjectsInactive()
            return projectData.setActive(id)
        }
    let addProject = (project) => projectData.addProject(project)
    let getData = () => {
        return projectData.getProjects()
    }
    return {getData, setProjectActive, addProject, addTodo}
}


export default projectController