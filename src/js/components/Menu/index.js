function Menu() {
  const state = {
    isOpen: false,
  };

  const menuElement = document.querySelector('.header__menu');
  const navElement = document.querySelector('.header__nav');
  const bodyElement = document.querySelector('body');
  const menuInitialClass = 'header__nav';
  const menuShowClass = 'header__nav--show';

  function addListener() {
    return menuElement.addEventListener('click', toggleState);
  }

  function toggleState() {
    Object.assign({}, state, (state.isOpen = !state.isOpen));
    handleMenu();
    return;
  }

  function makeOverlayDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'overlay');
    return div;
  }

  function appendOverlay(target) {
    if (target) return target.prepend(makeOverlayDiv());
  }

  function removeOverlay(target) {
    if (target) return target.remove();
  }

  function lockBody() {
    return (bodyElement.style.overflow = 'hidden');
  }

  function unlockBody() {
    return (bodyElement.style.overflow = 'initial');
  }

  function setCloseIcon() {
    return (menuElement.src = 'images/icon-close.svg');
  }

  function setHamburgerIcon() {
    return (menuElement.src = 'images/icon-hamburger.svg');
  }

  function showNav() {
    navElement.classList = menuShowClass;
    appendOverlay(bodyElement);
    lockBody();
    setCloseIcon();
    return;
  }

  function hideNav() {
    navElement.classList = menuInitialClass;
    const overlayElement = document.querySelector('.overlay');
    removeOverlay(overlayElement);
    unlockBody();
    setHamburgerIcon();
    return;
  }

  function handleMenu() {
    if (state.isOpen) {
      return showNav();
    }
    return hideNav();
  }

  return addListener();
}

export default Menu;
