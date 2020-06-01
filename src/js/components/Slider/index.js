function Slider($) {
  const config = {
    mobileFirst: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3,
        },
      },
    ],
  };
  $('.slider-container').slick(config);
}

export default Slider;
