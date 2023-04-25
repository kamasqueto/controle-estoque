const buttonMenu = document.querySelector('#buttonMenu');
const sideBar = document.querySelector('#sidebar');
const listItens = document.querySelector('#list-itens');
const listItensA = document.querySelectorAll('a');
const listItenLi = document.querySelectorAll('li');
var showSidebar = false;


buttonMenu.addEventListener('click', (e) => {
    e.preventDefault();

    if(!showSidebar) {
        console.log('entrou no if')
        sideBar.classList.toggle('sidebar-menu');
        for (let i = 0; i < listItensA.length; i++) {
            listItensA[i].classList.toggle('list-itens-menu-a');
        }
        for (let i = 0; i < listItenLi.length; i++) {
            listItenLi[i].classList.toggle('remove-li')            
        }
        
        
    }
})