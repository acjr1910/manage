function Slider($) {
  const config = {
    // centerMode: true, // maybe use on desktop
    slidesToShow: 1,
    arrows: false,
    dots: true,
  };
  $('.slider-container').slick(config);
}

export default Slider;
