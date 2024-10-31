

const topMenu = document.getElementById('custom-menu')
const topMenuIcon = document.getElementById('toggle-custom-menu')

document.addEventListener('click', (e) => {
    if(topMenuIcon.contains(e.target)){
        topMenu.classList.toggle('hidden');
    } else if(!topMenu.contains(e.target)){
        topMenu.classList.add('hidden');
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,     
    grid: {
        rows: 3,              
    },
    navigation: {
        nextEl: '.docterNext',
        prevEl: '.docterPrev',
    },
           
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
