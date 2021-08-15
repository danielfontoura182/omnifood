// NAV
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const navLinksContainer = document.querySelector('.nav__links-container')
const navLinks = document.querySelector('.nav__links')

function closeNavigation() {
  navLinksContainer.style.transform = 'translateY(-101vh)'
  navLinks.style.transform = 'translate(-200%, -50%)'
  navLinks.style.opacity = 0
}

openNav.addEventListener('click', () => {
  navLinksContainer.style.transform = 'translateY(0vh)'
  navLinks.style.transform = 'translate(-50%, -50%)'
  navLinks.style.opacity = 1
})

closeNav.addEventListener('click', closeNavigation)

//STICKY NAV
const navContainer = document.querySelector('.nav-container')
const logo = document.querySelector('.logo')
const header = document.querySelector('.header')
const navHeight = navContainer.getBoundingClientRect().height
const headerObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
}

function stickyNav(entries) {
  const [entry] = entries

  if (!entry.isIntersecting) {
    navContainer.classList.add('sticky-nav')
    logo.style.display = 'none'
    return
  }

  navContainer.classList.remove('sticky-nav')
  logo.style.display = 'block'
}

const headerObserver = new IntersectionObserver(stickyNav, headerObsOptions)
headerObserver.observe(header)

//FADE IN SKILLS
const skillsContainer = document.querySelector('.about__skills-container')
const skillsContainerObsOptions = {
  root: null,
  threshold: 0.3,
}

function fadeInSkills(entries) {
  const [entry] = entries

  if (entry.isIntersecting) skillsContainer.classList.add('skills-active')
}

const skillsContainerObserver = new IntersectionObserver(
  fadeInSkills,
  skillsContainerObsOptions
)
skillsContainerObserver.observe(skillsContainer)

//FADE IN CITIES
const citiesContainer = document.querySelector('.cities-container')

const citySectionObsOptions = {
  root: null,
  threshold: 0.2,
}

function fadeInCities(entries) {
  const [entry] = entries

  if (entry.isIntersecting)
    citiesContainer.classList.add('cities-container--active')
}

const citiesObserver = new IntersectionObserver(
  fadeInCities,
  citySectionObsOptions
)
citiesObserver.observe(citiesContainer)

//PHONE ANIMATION
const phone = document.querySelector('.phone-img-container')
const howItWorksSection = document.querySelector('.how-it-works')
const howItWorksObsOptions = {
  root: null,
  threshold: 0.3,
}

function phoneAnimation(entries) {
  const [entry] = entries

  if (entry.isIntersecting) phone.classList.add('phone-img-container--active')
}

const howItWorksObserver = new IntersectionObserver(
  phoneAnimation,
  howItWorksObsOptions
)
howItWorksObserver.observe(howItWorksSection)

// CAROUSEL
const testimonialsContainer = document.querySelector('.testimonials__container')
const testimonials = document.querySelectorAll('.testimonial')

let currentSlide = 0

function moveToSlide(curSlide) {
  testimonials.forEach((t, idx) => {
    t.style.transform = `translateX(${(idx - curSlide) * 100}%)`
  })
}

function nextSlide() {
  if (currentSlide === testimonials.length - 1) {
    currentSlide = 0
    moveToSlide(currentSlide)

    return
  }

  currentSlide++
  moveToSlide(currentSlide)
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = testimonials.length - 1
    moveToSlide(currentSlide)

    return
  }

  currentSlide--
  moveToSlide(currentSlide)
}

function slideInterval() {
  setInterval(nextSlide, 3000)
}

testimonialsContainer.addEventListener('click', (e) => {
  const target = e.target

  if (target.classList.contains('arrow-right')) {
    nextSlide()
  }

  if (target.classList.contains('arrow-left')) {
    prevSlide()
  }
})

testimonialsContainer.addEventListener('mouseenter', () =>
  clearInterval(slideInterval)
)

// PULSE PLAN ANIMATION
const premiumPlan = document.querySelector('.plan--premium')
const premiumPlanObsOptions = {
  root: null,
  threshold: 0.5,
}

function pulsePlan() {
  premiumPlan.classList.add('premium-pulse')
  setTimeout(() => {
    premiumPlan.classList.remove('premium-pulse')
  }, 1000)
}

const premiumPlanObserver = new IntersectionObserver(
  pulsePlan,
  premiumPlanObsOptions
)
premiumPlanObserver.observe(premiumPlan)

//MOBILE NAV
const mobileNav = document.querySelector('.nav__links')

mobileNav.addEventListener('click', (e) => {
  if (e.target.closest('li').classList.contains('mobile-link')) {
    closeNavigation()
  }
})
