import header from "./header";
import sidebar from "./sidebar";
import './styles/index.css'
let page = document.querySelector('.content');
let main = document.createElement('main');
page.appendChild(header());
page.appendChild(main)
main.appendChild(sidebar());