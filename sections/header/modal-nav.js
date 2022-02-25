let headerBurger = document.getElementsByClassName('header__burger')[0];
let headerBlur = document.getElementsByClassName('header__blur')[0];
let nav = document.getElementsByClassName('nav')[0];
let navList = document.getElementsByClassName('nav__list')[0];

function closeNav() {
  headerBurger.classList.remove('header__burger_closing');
  navList.classList.remove('nav__list_visible');
  nav.classList.remove('nav_visible');
  headerBlur.classList.remove('header__blur_visible');
  document.body.style.paddingRight = document.body.style.overflowY = '';
}

headerBurger.addEventListener('click', event => {
  if (event.target.classList.contains('header__burger_closing')) {
    closeNav();
  } else {
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.style.overflowY = 'hidden';
    nav.classList.add('nav_visible');
    headerBlur.classList.add('header__blur_visible');
    headerBurger.classList.add('header__burger_closing');
    setTimeout(() => navList.classList.add('nav__list_visible'));
  }
})

headerBlur.addEventListener('click', closeNav);