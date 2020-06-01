function Menu() {
  const state = {
    isOpen: false,
    isListening: false,
  };

  const menuElement = document.querySelector('.header__menu-icon');
  const navElement = document.querySelector('.header__nav');
  const navItemsList = document.querySelectorAll('.header__nav-item');
  const bodyElement = document.querySelector('body');
  const menuInitialClass = 'header__nav';
  const menuShowClass = 'header__nav--show';

  function addListeners() {
    const initialWindowSize = window.innerWidth;
    const tabletScreenSize = 768;

    if (initialWindowSize <= tabletScreenSize) {
      addMenuBehavior();
    }

    window.addEventListener('resize', function () {
      const windowWidth = window.innerWidth;
      if (windowWidth <= tabletScreenSize && !state.isListening) {
        return addMenuBehavior();
      } else if (state.isListening) {
        return removeMenuBehavior();
      }
    });
  }

  function toggleState() {
    Object.assign({}, state, (state.isOpen = !state.isOpen));
    handleMenu();
    return;
  }

  function addMenuBehavior() {
    if (!state.isListening) {
      menuElement.addEventListener('click', toggleState);
      navItemsList.forEach((navItem) => {
        const id = navItem.attributes.to.value;
        navItem.addEventListener('click', () => handleNavItemClick(id));
      });
      Object.assign({}, state, (state.isListening = true));
    }
    return;
  }

  function removeMenuBehavior() {
    menuElement.removeEventListener('click', toggleState);
    navItemsList.forEach((navItem) => {
      navItem.removeEventListener('click', handleNavItemClick);
    });
    Object.assign({}, state, (state.isListening = false));
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

  return addListeners();
}

export default Menu;
