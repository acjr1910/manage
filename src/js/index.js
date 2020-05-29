import styles from '../styles/index.scss';
import Menu from './components/Menu/index';
import Slider from './components/Slider/index';

(function () {
  window.addEventListener('DOMContentLoaded', (event) => {
    Slider(jQuery);
    Menu();
  });
})();
