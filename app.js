const openBtn = document.querySelector(".open-menu")
const closeBtn = document.querySelector(".close-menu")

window.addEventListener('scroll', onScroll)
openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

function openMenu() {
    document.body.classList.add('menu-mobile')
}

function closeMenu() {
    document.body.classList.remove('menu-mobile')
}

function onScroll() {
    showNavOnScroll()
    showButtonOnScroll()
    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(about)
    activeMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showButtonOnScroll() {
    if (scrollY > 400) {
        scrollToTop.classList.add('show')
    } else {
        scrollToTop.classList.remove('show')
    }
}

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionEndsAt = sectionTop + sectionHeight //ponto final da seçao
    
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop //inicio da seção é MENOR que o target line?
    const sectionEndIsBelowTargetLine = targetLine <= sectionEndsAt //final da seção é MAIOR que o target line?

    const sectionBounderies = sectionTopReachOrPassedTargetLine && sectionEndIsBelowTargetLine

    const sectionId = section.getAttribute('id')
    const element = document.querySelector(`.menu a[href*=${sectionId}]`)
    if (sectionBounderies) {
        element.classList.add("active")
    } else {
        element.classList.remove("active")
    }
}

// SCROOL REVEAL LIB CONFIG
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .cards .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content,
    footer,
    footer .logo,
    footer p,
    footer ul,
`)