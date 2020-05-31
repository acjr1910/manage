function Menu() {
  const state = {
    isOpen: false,
  };

  const menuElement = document.querySelector('.header__menu-icon');
  const navElement = document.querySelector('.header__nav');
  const navItemsList = document.querySelectorAll('.header__nav-item');
  const bodyElement = document.querySelector('body');
  const menuInitialClass = 'header__nav';
  const menuShowClass = 'header__nav--show';

  function addListener() {
    menuElement.addEventListener('click', toggleState);
    navItemsList.forEach((navItem) => {
      console.log(navItem);
      const id = navItem.attributes.to.value;
      navItem.addEventListener('click', () => handleNavItemClick(id));
    });
    return;
  }

  function toggleState() {
    Object.assign({}, state, (state.isOpen = !state.isOpen));
    handleMenu();
    return;
  }

  function handleNavItemClick(id) {
    toggleState();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
    menuElement.src = 'images/icon-close.svg';
    menuElement.alt = 'Close Icon';
    return;
  }

  function setHamburgerIcon() {
    menuElement.src = 'images/icon-hamburger.svg';
    menuElement.alt = 'Menu Icon';
    return;
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
