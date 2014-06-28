/* ==========================================================
  Base Scripts
  -- Table of Contents --
*/


$(document).ready(function(){
//smooth scroll only on #

$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
    event.preventDefault();
});

});