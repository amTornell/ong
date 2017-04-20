
(function() {
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

    $('body').scrollspy({
        target: '#main-menu'
    });
    /******
    calendario
    *******/
    var $datepicker = $('.calendario').pikaday({
        minDate: new Date(),
        format: "MM/DD/YYYY",
        maxDate: new Date(2018, 12, 31),
        yearRange: [2017, 2018]
    });

    // A $( document ).ready() block.
    $(document).ready(function() {
       
        $( ".btn-success" ).click(function() {
            swal({
                  title: 'Información recibida',
                  text: 'Revisaremos tu información y en breve nos comunicaremos contigo',
                  type: 'success',
                  timer: 4000
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      console.log('I was closed by the timer')
                    }
                  }
                )
        });
        $( ".btn-error" ).click(function() {
            swal({
                  title: 'Algo está mal',
                  text: 'Inténtalo de nuevo o escribe un mail a: mail@aeromexico.com',
                  type: 'error',
                  timer: 4000
                }).then(
                  function () {},
                  // handling the promise rejection
                  function (dismiss) {
                    if (dismiss === 'timer') {
                      console.log('I was closed by the timer')
                    }
                  }
                )
        });
    });

    $(window).on('load', function() { // makes sure the whole site is loaded 

    })


})();
(function() {

	console.log("script app 2");

})();
