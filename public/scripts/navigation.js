const $ = (item) => window.document.querySelector(item)

const primaryNav = $('#primary-navigation')
const navToggle = $('#mobile-nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', 'true')
    navToggle.setAttribute('aria-expanded', true)
  } else {
    primaryNav.setAttribute('data-visible', 'false')
    navToggle.setAttribute('aria-expanded', false)
  }
})