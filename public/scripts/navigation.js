const $ = (item) => window.document.querySelector(item)

const primaryNav = $('#primary-navigation')
const navToggle = $('#mobile-nav-toggle')
const body = $('body')
const sectionAnchors = window.document.querySelectorAll('li>a')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === 'false') {
    console.log(body)
    primaryNav.setAttribute('data-visible', 'true')
    navToggle.setAttribute('aria-expanded', true)
    body.classList.add('disable-scroll')
  } else {
    backToNormal()
  }
})

sectionAnchors.forEach(a => a.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility !== 'false') {
    backToNormal()
  }
}))

const backToNormal = () => {
  primaryNav.setAttribute('data-visible', 'false')
  navToggle.setAttribute('aria-expanded', false)
  body.classList.remove('disable-scroll')
}