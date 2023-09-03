let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', click)
function click() {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
  console.log(100)
}
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

  menuIcon.classList.remove('bx-x')
  menuIcon.classList.remove('active')
}
// toggle icon navbar
