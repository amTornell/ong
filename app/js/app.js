(function() {
 //**************      menu mobile    **************


 if ($('#trivia').length) {
  //$('.trivia-instruction').modal('show');
 }





 /*
 30 segundos para contestar cada pregunta
 */
 function countdown() {

 }


 // spy and scroll menu boogey
 $("#nav ul li a[href^='#']").on('click', function(e) {

  // prevent default anchor click behavior
  e.preventDefault()

  // store hash
  var hash = this.hash

  // animate
  $('html, body').animate({
   scrollTop: $(this.hash).offset().top - 80
  }, 800, function() {
   window.location.hash = hash - 50
  })

 })

 /******* select *******/

 /*
 Reference: http://jsfiddle.net/BB3JK/47/
 */

 $('select').each(function() {
  var $this = $(this),
   numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
   'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
   $('<li />', {
    text: $this.children('option').eq(i).text(),
    rel: $this.children('option').eq(i).val()
   }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
   e.stopPropagation();
   $('div.select-styled.active').not(this).each(function() {
    $(this).removeClass('active').next('ul.select-options').hide();
   });
   $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
   e.stopPropagation();
   $styledSelect.text($(this).text()).removeClass('active');
   $this.val($(this).attr('rel'));
   $list.hide();
  });

  $(document).click(function() {
   $styledSelect.removeClass('active');
   $list.hide();
  });

 });
 /******** select *******/

 /******
    
 calendario
 *******/
 var $datepicker = $('.calendario').pikaday({
  minDate: new Date(),
  format : "MM/DD/YYYY",
  maxDate: new Date(2018, 12, 31),
  yearRange: [2017, 2018]
 });

 //$('.calendario').setMoment(moment().format('D MMM YYYY'));

 // chain a few methods for the first datepicker, jQuery style!
 //$datepicker.pikaday('show').pikaday('nextMonth');
 $('body').scrollspy({
  target: '#main-menu'
 });
 /*************
 preloader
 ************/


 $(window).on('load', function() { // makes sure the whole site is loaded 

 })


})();
(function() {

	console.log("script app 2");

})();
