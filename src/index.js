import domController from "./dom-controller";
import projectController from "./project-controller"
import events from "./events.js"
let dom = domController()
let project = projectController()
let loadEvents = events(project, dom)
dom.initialLoad()

dom.render(project.getData())


let event = events()
console.log(project)
loadEvents.loadSidebarEvents(project, dom)
// console.log(data)
// console.log(dom)



// import './styles/index.css'
// import todoContainer from "./todo-container";
// import createTodo from './create-todo'
// let page = document.querySelector('.content');
// let main = document.createElement('main');
// let defaultContainer = todoContainer()

// page.appendChild(header());
// page.appendChild(main)
// main.appendChild(sidebar());

