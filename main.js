/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

 navLink.forEach(n=> n.addEventListener('click',linkAction))
/*=============== SWIPER HOME ===============*/

const swiperHome=new Swiper('.home__swiper',{
   
    loop:true,
    slidesPerView:'auto',
     grabCursor: true,

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    }
   
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader =() =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}

window.addEventListener('scroll',bgHeader)

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial=new Swiper('.testimonial__swiper',{
   
    loop:true,
    slidesPerView:'auto',
    spaceBetween: 48,
    grabCursor: true,


    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    }
   
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp= ()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY>=350 ? scrollUp.classList.add(show-scroll)
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight= current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId= current.getAttribute('id'),
            sectionsClass= document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown<= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }
            else{
                sectionsClasslass.classList.remove('active-link')
            }
    })
    window.addEventListener('scroll',scrollActive)   
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

const selectedTheme = localStorage.getItems('selected-theme')
const selectedIcon = localStorage.getItems('selected-icon')

const getCurrentTheme=()=> document.bodyclassList.contains(darkTheme)? 'dark'
: 'light'
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme)?'ri-moon-fill'
: 'ri-sun-fill '

if(selectedTheme) {
    document.body.classList[selectedTheme ==='dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toogle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
        origin:'top',
        distance:'60px',
        duration:2000,
        delay:300,
})

sr.reveal(`.home__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__title`,{delay:600})
sr.reveal(`.home__description`,{delay:900})
sr.reveal(`.home__data .button`,{delay:1200})
sr.reveal(`.destination__card, .gallery__card`,{delay:100})
sr.reveal(`.join__data`,{origin:'left'})
sr.reveal(`.join__img`,{origin:'right'})


