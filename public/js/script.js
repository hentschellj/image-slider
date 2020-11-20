$(document).ready(function($) {
  const imageBox      = $('.slider ul'),
        imageWidth    = $('.slider ul li').first().children('img').width(),
        imageQuantity = $('.slider ul').children('li').length;
  let currentImage    = 1;

  imageBox.css('width', imageWidth*imageQuantity);

  $('.nav button').on('click', function() {
    const whichButton = $(this).data('nav');
    if (whichButton === 'next') {
      currentImage++;
      transition(currentImage, imageWidth);
    } else if (whichButton === 'prev') {
      currentImage--;
      transition(currentImage, imageWidth);
    }
  });

  function transition(image, width) {
    const pxValue = -(image - 1) * width;
    imageBox.animate({'left' : pxValue});
  }
});