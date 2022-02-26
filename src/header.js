import './styles/header.css'

let header = function() {
    let header = document.createElement('div')
    header.className = 'header'
    header.textContent = 'header'
    return header
}

let appendHeader = function(page) {
    page.appendChild(header())
}

export default appendHeader