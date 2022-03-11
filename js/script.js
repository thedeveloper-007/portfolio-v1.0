// nav styling
window.addEventListener('scroll', function(){
    var topnav = document.getElementById('navbar');
    topnav.classList.toggle('sticky', window.scrollY>20);
})

// responsive menu styling
/*
var menuShow = document.querySelector('.fas');
menuShow.onclick = function(){
    var menu = document.getElementById('menuBar');
    var i = document.querySelector('.fas')
    menu.classList.add('active');
    i.classList.add('active');
}
*/


// return to top styling

window.addEventListener('scroll', function(){
    var returnTotop = document.getElementById('rtt');
    returnTotop.classList.toggle('rtt', window.scrollY > 500);
});

$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },

        }
    });
    let typed = new Typed('.typing', {
        strings: ['Developer.', 'Freelancer.','YouTuber.', 'Bloger.', 'Designer.'],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    
    });
});

let typed = new Typed('.typing-two', {
    strings: ['Developer.', 'Freelancer.','YouTuber.', 'Bloger.', 'Designer.'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true

});
// typing animation 

