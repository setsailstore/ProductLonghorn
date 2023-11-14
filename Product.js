const navigasi = document.querySelector ('.navbar');
const closemenu = document.querySelector ('.close');
const openmenu = document.querySelector ('.mobile');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    navigasi.style.display = 'flex';
    navigasi.style.top = '0';
    navigasi.style.transition =  "top 1.2s ease";
    
}

function close(){
    navigasi.style.top = '-100%';
}

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });