$(document).ready(function($) {
  var imageBox      = $('.slider ul'),
      imageWidth    = $('.slider ul li').first().children('img').width(),
      imageQuantity = $('.slider ul').children('li').length;

  imageBox.css('width', imageWidth*imageQuantity);

  $('.nav button').on('click', function() {
    const whichButton = $(this).data('nav');
    console.log(whichButton);
  })
})