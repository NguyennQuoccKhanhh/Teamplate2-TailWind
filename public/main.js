

const topMenu = document.getElementById('custom-menu')
const topMenuIcon = document.getElementById('toggle-custom-menu')

document.addEventListener('click', (e) => {
    if(topMenuIcon.contains(e.target)){
        topMenu.classList.toggle('hidden');
    } else if(!topMenu.contains(e.target)){
        topMenu.classList.add('hidden');
    }
})

var gridSwiper  = new Swiper(".gridSwiper ", {
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

var swiper = new Swiper(".singleSwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.docterNext2',
        prevEl: '.docterPrev2',
    },
});


const threeSwiper = new Swiper(".threeSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.docterNext3',
        prevEl: '.docterPrev3',
    }
});
