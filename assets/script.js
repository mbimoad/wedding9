$('.link').on('click', function(e) {
    e.preventDefault(); 
    href = $(this).attr('href'); 
    href = $(href); 
    href = Math.ceil(href.offset().top); 
    $('html,body').animate({
        scrollTop: href,
    }, 1000, 'easeInOutExpo');
})

let ukuranlayar = window.innerWidth;
const audio = document.querySelector('.audio');
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var cookie  = getCookie('login'); 
var scookie = String(cookie); 


$('.open').on('click', function() {
    $('body, html').animate({
        scrollTop: 0,
      },0)

    if(ukuranlayar <= 683) {
        $('.nav').css({
            'display':'inline-block',
        })
    } else if(ukuranlayar > 683) {
        $('.nav').css({
            'display':'none',
        })
    }

    $('.invite').addClass('buka'); 
    $('.dashboard').addClass('aktif'); 
    $('.myicon').css({
        'display': 'inline-block'
    })
    audio.play(); 
    setCookie('login','true',1);    
})

$(window).on('load', function() {
    if($('.dashboard').hasClass('aktif')) {
        $('.myicon').css({
            'display': 'inline-block'
        })
    }
    if(scookie != 'null') {
        $('.myicon').css({
            'display': 'inline-block'
        })
        if(ukuranlayar <= 683) {
            $('.nav').css({
                'display': 'inline-block',
            })
        } else if(ukuranlayar > 683) {
            $('.nav').css({
                'display': 'none',
            })
        }
    } else {
        $('.nav').css({
            'display': 'none',
        })
    }
   
})

let wedding = new Date("Sept 19, 2025 11:00:00").getTime();

let x = setInterval(() => {
    let current = new Date().getTime(); 
    var targets = wedding - current; 
    var hari  = Math.floor(targets / (1000 * 60 * 60 * 24)); 
    var jams  = Math.floor(targets % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var menit = Math.floor(targets % (1000 * 60 * 60)      / (1000 * 60));
    var detik = Math.floor(targets % (1000 * 60)           / (1000)); 

    $('.hari').html(hari); 
    $('.jam').html(jams); 
    $('.menit').html(menit); 
    $('.detik').html(detik);

    if(targets <= 0) {
        $('.hari').html(0); 
        $('.jam').html(0); 
        $('.menit').html(0); 
        $('.detik').html(0);
        clearInterval(x); 
    }
}, 1000);

$('.myicon').on('click', function() {
    if($('.myicon i').hasClass('fa-play')) {
        $('.myicon').html('<i class="fas fa-pause"></i>');
        audio.play(); 
    } else {
        $('.myicon').html('<i class="fas fa-play"></i>');
        audio.pause();
    }
 });

 $(window).on('scroll', function() {
     let scrollPos = $(this).scrollTop(); 
     let healthPos = Math.ceil($('.health-protocol').offset().top - 100); 
     let lovestory = $('.love-story').offset().top; 
     if(scrollPos > healthPos) {
         $('.mybox .col-md-4').each((index, item) => {
             setTimeout(() => {
                 $('.mybox .col-md-4').eq(index).addClass('muncul')
             }, index * 500);
         })
     }
     if(scrollPos > lovestory) {
        $('.love-story .hilang').each((index, item) => {
            setTimeout(() => $('.love-story .hilang').eq(index).addClass('muncul'), index * 500); 
        })
    }
     
 })


 $('.amplop .card').each(function(index, item) {
     this.dataset.aos = 'fade-up';
     this.dataset.aosDelay = index * 300; 
 })


 AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 190, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('copy')) {
        copas = e.target.dataset.rekening; 
        await navigator.clipboard.writeText(copas); 
        Swal.fire(
            'Good job!',
            'Copy Success!',
            'success'
        );
    }
})
