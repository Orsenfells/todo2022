import domController from "./dom-controller";
import projectController from "./project-controller"
import eventListeners from "./events.js"
let dom = domController()
let project = projectController()
let events = eventListeners(project, dom)
dom.initialLoad()

dom.render(project.getData())

events.loadEvents()
