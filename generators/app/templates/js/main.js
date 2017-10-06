function main() {

  // use on because of append
  $('#container-team').on('click', '.team-member', function (e) {
    if($(this).hasClass('on')){
      $(this).removeClass('on');
    }else{
      $(this).addClass('on');
    }
  });

$("#lastWordGreen").html(function(){
  var text= $(this).text().trim().split(" ");
  var last = text.pop();
  return text.join(" ") + (text.length > 0 ? " <span class='text-green'>" + last + "</span>" : last);
});


(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function (e) {
      // check if window is small enough so dropdown is created
      if (!$('.dropdown').is(e.target)
          && $('.dropdown').has(e.target).length === 0
          && $('.open').has(e.target).length === 0
      ) {
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    }
    });

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    // Nivo Lightbox
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });

	// Testimonial Slider
	  	$(document).ready(function() {
	      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        loop:true,
        autoPlay:true,
        autoPlayTimeout:5000,
        autoPlayHoverPause:true
        });

  	});

}());


}
main();

$('.alert').hide();
$('#form-contact').submit(function (e) {

	e.preventDefault();
	var item = $('#form-contact').serializeArray();

	var name;var email;var description;var check = '';
  console.log(item);
	for (var i = 0; i < item.length; i++) {
		if (item[i].name === 'name') {
			name = item[i].value;
		}
		if (item[i].name === 'email') {
			email = item[i].value;
		}
		if (item[i].name === 'description') {
			description = item[i].value;
		}
	}

	var request = [];
	request.client = 'Altras Website';
	request.category = 'email';
	request.content = description;
	request.checkbox = '';
	request.emailContact = email;
	request.emailClient = 'raphael.sculati@gmail.com';
  // TODO: info@altras.ch
	request.name = name;
  // console.log(request);
	saveRequest(request);
});

function saveRequest(request) {
    $.ajax({
    type: 'POST',
    url: 'https://thecomputerfirm.herokuapp.com/api/requests',
    // url: "http://localhost:8080/api/requests",
    data: {
      client : request.client,
      category : request.category,
      content : request.content,
      checkbox : request.checkbox,
      emailContact : request.emailContact,
      emailClient : request.emailClient,
      name : request.name
    },
    dataType: 'json',
    success: function( data, textStatus, jQxhr ){
                    $('.alert-success').show('slow');
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
  });
}
