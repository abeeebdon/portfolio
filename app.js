let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach((sect) => {
    let top = window.scrollY
    let offset = sect.offsetTop - 150
    let height = sect.offsetHeight
    let id = sect.getAttribute('id')
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
  //   sticky navbar
  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100)
}
