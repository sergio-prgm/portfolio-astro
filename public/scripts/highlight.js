const sections = document.querySelectorAll('section')
const navList = document.querySelectorAll('li>a')

console.log(sections)

const options = {
  threshold: 0.3,
  rootMargin: '-100px 0px -150px 0px'
}

const observerEntries = {
  about: 0,
  projects: 1,
  contact: 2
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    let entryClass = entry.target.id
    console.log(entryClass)

    if (entry.isIntersecting) {
      navList[observerEntries[`${entryClass}`]].classList.add('observer')
    }
    if (!entry.isIntersecting) {
      navList[observerEntries[`${entryClass}`]].classList.remove('observer')
    }
  })
}, options)

observer.observe(sections[1])
observer.observe(sections[2])
// observer.observe(sections[3])

// sections.forEach(sections => observer.observe(sections))