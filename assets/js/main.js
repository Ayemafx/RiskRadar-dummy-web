
// On Scroll function
function navMenu(){
    let navBar = document.querySelector('.navbar-sticky')
    let scrollTopButton = document.querySelector('#scrollUp')

    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 120){
            navBar.classList.add("navbar-sticky-moved-up")
        }
        else{
            navBar.classList.remove("navbar-sticky-moved-up")
        }

        //transition
        if (scroll >= 250){
            navBar.classList.add('navbar-sticky-transitioned');
            scrollTopButton.classList.add('scrollActive')
        }
        else{
            navBar.classList.remove('navbar-sticky-transitioned');
            scrollTopButton.classList.remove('scrollActive')
        }

        //sticky on
        if(scroll >= 500){
            navBar.classList.add('navbar-sticky-on');
        }
        else{
            navBar.classList.remove('navbar-sticky-on');
        }
    }
}


navMenu();
//Counter Design

document.addEventListener('DOMContentLoaded', () =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1:-1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current
            if (current == end){
                clearInterval(timer)
            }
        }, step)
    }
    counter('count1', 0, 10, 2000)
    counter('count2', 100, 20, 3000)
    counter('count3', 0, 30, 4000)
    counter('count4', 0, 10, 2000)
})

 // APP-SCREEN
 var swiper = new Swiper('.swiper-container.app-screen', {
    effect: 'coverflow',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    coverflow: {
        rotate: 50,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
    }
}); 


let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})