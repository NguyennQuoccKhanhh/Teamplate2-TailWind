

const topMenu = document.getElementById('hover-responsive-topmenu');
const toggleTopMenuIcon = document.getElementById('toggle-hover-responsive-topmenu-icon');

document.addEventListener('click', (e)=>{
    if(toggleTopMenuIcon.contains(e.target)){
        topMenu.classList.toggle('hidden');
    }else{
    }
})