let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header .navbar a')

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  section.forEach(s => {
    let top = window.scrollY;
    let height = s.offsetHeight;
    let offset = s.offsetTop - 150;
    let id = s.getAttribute('id');
  
    if (top >= offset && top < offset + height) {
      navlinks.forEach(n => {
        n.classList.remove('active');
      });
  
      const targetLink = document.querySelector(`header .navbar a[href="#${id}"]`);
      if (targetLink) {
        targetLink.classList.add('active');
      }
    }
  });

}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active') 
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active') 
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

