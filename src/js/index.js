import styles from '../styles/index.scss';

(function ($) {
  const config = {
    // centerMode: true, // maybe use on desktop
    slidesToShow: 1,
    arrows: false,
    dots: true,
  };
  $(document).ready(function () {
    $('.slider-container').slick(config);
  });
})(jQuery);
