// import projectData from './project-data'


let projectData = (() => {
    let projects = [
        {
        project: 'Finish Todo Project',
        id: 'dsd',
        active: true,
        todos: [{
            title: 'add duedate',
            id: 'test',
            duedate: '08/01',
            description: 'refactor the data and dom to include duedate',
            priority: 'High',
        },
        {
            title: 'expand task',
            id: 'test',
            duedate: '08/01',
            description: 'expand a task to see/edit its details',
            priority: 'High',
        },
        {
            title: 'delete task',
            id: 'test',
            duedate: '08/01',
            description: 'Delete tasks/mark as complete',
            priority: 'High',
        },
        {
            title: 'persistence',
            id: 'test',
            duedate: '08/01',
            description: 'Use Web Storage API for persistence',
            priority: 'High',
        },
        {
            title: 'update visuals',
            id: 'test',
            duedate: '08/01',
            description: 'Make the site look nice',
            priority: 'High',
        },
        ]
    },
    {
        project: 'Learn to cook',
        id: 'tests',
        active: false,
        todos: [{
            title: 'Cook pasta',
            id: 'super-test',
            description: 'Make a nice chicken alfredo',
            priority: 'low',
        }]
    },
];

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
    
    let addTodo = (index, todo) => projectData.addTodo(index, todo)

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