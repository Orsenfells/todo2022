import header from "./header";
import sidebar from "./sidebar";
import './styles/index.css'
import todoContainer from "./todo-container";
import todo from './todo'
let page = document.querySelector('.content');
let main = document.createElement('main');
let defaultContainer = todoContainer()
let testData = {
    title: 'Test',
    description: 'Test Todo',
    priority: 'high',

}
page.appendChild(header());
page.appendChild(main)
main.appendChild(sidebar());
main.appendChild(defaultContainer.getContainer())
defaultContainer.appendToContainer(todo(testData))
defaultContainer.appendToContainer(todo(testData))
defaultContainer.appendToContainer(todo(testData))
