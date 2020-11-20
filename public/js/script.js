$(document).ready(function() {
  $('.nav button').on('click', function() {
    const whichButton = $(this).data('nav');
    console.log(whichButton);
  })
})