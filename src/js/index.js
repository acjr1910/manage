import Menu from './components/Menu/index';
import Slider from './components/Slider/index';

import styles from '../styles/index.scss';

(function () {
  window.addEventListener('DOMContentLoaded', (event) => {
    Slider(jQuery);
    Menu();
  });
})();
