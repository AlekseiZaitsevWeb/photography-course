const btnMenuOpen = document.querySelector('.button_type_menu-open');
const btnMenuClose = document.querySelector('.button_type_menu-close');
const headerContainer = document.querySelector('.header__container');
const headerLogo = document.querySelector('.header__logo-link');
const headerLinks = document.querySelector('.header__links');

const btnAction = document.querySelector('.action__button');
const inpAction = document.querySelector('.action__input-text');
const root = document.querySelector('.root');


function openMenu() {

  if(!btnMenuOpen.classList.contains('disabled'))
    btnMenuOpen.classList.add('disabled');

  if(btnMenuClose.classList.contains('disabled'))
    btnMenuClose.classList.remove('disabled');

  if(!headerContainer.classList.contains('header__container_menu_active'))
  headerContainer.classList.add('header__container_menu_active');

  if(!headerLogo.classList.contains('header__logo-link_menu_active'))
  headerLogo.classList.add('header__logo-link_menu_active');

  if(!headerLinks.classList.contains('header__links_menu_active'))
  headerLinks.classList.add('header__links_menu_active');

}

function closeMenu() {

  if(!btnMenuClose.classList.contains('disabled'))
    btnMenuClose.classList.add('disabled');

  if(btnMenuOpen.classList.contains('disabled'))
    btnMenuOpen.classList.remove('disabled');

  if(headerContainer.classList.contains('header__container_menu_active'))
  headerContainer.classList.remove('header__container_menu_active');

  if(headerLogo.classList.contains('header__logo-link_menu_active'))
  headerLogo.classList.remove('header__logo-link_menu_active');

  if(headerLinks.classList.contains('header__links_menu_active'))
  headerLinks.classList.remove('header__links_menu_active');

}

function changeBtnText() {
  btnAction.style.fontWeight = 500;
  if(inpAction.value.length === 0) {
    btnAction.textContent = 'Записаться!';
  }
}

function checkInputFocus(event){
  if(inpAction !== document.activeElement){
    btnAction.style.fontWeight = 400;
  }
}

btnMenuOpen.addEventListener('click', openMenu);
btnMenuClose.addEventListener('click', closeMenu);

inpAction.addEventListener('focus', changeBtnText);
inpAction.addEventListener('keyup', changeBtnText);
root.addEventListener('click', checkInputFocus);
