
let createModal = (id) => {
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = id;

    let toggleModalVisibility = () => {
        if(modal.style.display === 'none' || !modal.style.display){
            modal.style.display = 'flex';
        } else modal.style.display = 'none'
    }
    let getModal = () => modal;
    let appendToModal = (child) => modal.appendChild(child)
    return {getModal, toggleModalVisibility, appendToModal}
}

export default createModal