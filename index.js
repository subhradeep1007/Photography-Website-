const menu = document.querySelector('#mobilemenu')
const menulinks = document.querySelector('.nbmenu')

//Display mobile menu on clicking 3 dashes
mobilemenu = () => {
  menu.classList.toggle('is-active')
  menulinks.classList.toggle('active')
}

menu.addEventListener('click', mobilemenu)


//showing active menu while scrolling

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');

  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && window.scrollY < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && window.scrollY < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && window.scrollY < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && window.scrollY < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// const hideMobileMenu = () => {
//   const menuBars = document.querySelector('.is-active');
//   if (window.innerWidth <= 768 && menuBars) {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.remove('active');
//   }
// };

// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);