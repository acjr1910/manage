function Menu() {
  const state = {
    isOpen: false,
  };

  const menuElement = document.querySelector('.header__menu');
  const navElement = document.querySelector('.header__nav');
  const menuShowClass = 'header__nav--show';
  const menuInitialClass = 'header__nav';

  function addListener() {
    menuElement.addEventListener('click', toggleState);
  }

  function toggleState() {
    Object.assign({}, state, (state.isOpen = !state.isOpen));
    handleMenu();
  }

  function handleMenu() {
    if (state.isOpen) {
      return (navElement.classList = menuShowClass);
    }
    return (navElement.classList = menuInitialClass);
  }

  return addListener();
}

export default Menu;
