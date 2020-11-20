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
      const pxValue = -(currentImage - 1) * imageWidth;
      imageBox.animate({'left' : pxValue});
    } else if (whichButton === 'prev') {
      currentImage--;
      const pxValue = -(currentImage - 1) * imageWidth;
      imageBox.animate({'left' : pxValue});
    }
  });
});