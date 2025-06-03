/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW ======*/
// validate if constant exists

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN ======*/
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav-link we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects-container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -46,
        },
    },

})

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')



const sendEmail = (e) => {
    e.preventDefault()

    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // show message
        contactMessage.textContent = 'Fill in all the Input Fields 📩'
    } else {
        // serviceID -         templateID -        #form -        publicKey
        emailjs.sendForm('service_l5rf2cv', 'template_yos29jj', '#contact-form', '_5hhgx0rc_NRyCEhz')
            .then(() => {
                // show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent ✅🛫'


                // remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, () => {

                // show error message maybe due to poor service
                contactMessage.classList.add('color-red')
                contactMessage.textContent = 'Message not sent (service error) ❌'


                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 4000)
            })

        // to clear the field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// now we validate if the user previously used a topic

if (selectedTheme) {
    // if the validation is fulfiled, we ask what the issue was to know if we activated or deactivated the dark

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

// activtate or deactivate the theme manually by button

themeButton.addEventListener('click', () => {
    // add or remove the darkicon theme

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // now we save the theme and the current icon that the user chose

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true /*animation repeat*/
})

sr.reveal(`.home-data, .projects-container, .logo-carousel, .footer-container`)
sr.reveal(`.home-info div, .projects-page-holder`, { delay: 200, origin: 'bottom', interval: '100' })
sr.reveal(`.skills-content:nth-child(1)`, { origin: 'bottom' })
sr.reveal(`.contact-content:nth-child(1)`, { origin: 'left' })
sr.reveal(`.contact-content:nth-child(2)`, { origin: 'right' })
sr.reveal(`.services-card`, { interval: 100 })
