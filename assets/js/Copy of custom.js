// << == Document Ready Function Start == >>
$(document).ready(function(){


	// Accordian Action
	var action = 'click';
	var speed = "500";

	// Question handler
	$('li.q').on(action, function(){

	// gets next element
	// opens .a of selected question
	$(this).next().slideToggle(speed)

	// selects all other answers and slides up any open answer
	.siblings('li.a').slideUp();

	// Grab img from clicked question
	var img = $(this).children('img');

	// remove Rotate class from all images except the active
	$('img').not(img).removeClass('rotate');

	// toggle rotate class
	img.toggleClass('rotate');

	});


	//Sliding Menu
	$('#drawerExample').drawer({ 
	  toggle: true,
	  trigger: '[data-toggle="drawer"]',

	});

	//Start scroll with offset
	$('#myScrollspy a').not('first').on( 'click', function(){
		var offset = 0; // 100px offset because menu height 100px
		$('body').animate( {
		scrollTop: $( $(this).attr('href') ).offset().top - offset + 'px'
		}, 700); // How many time will have been scroll smooth and reach the section..
	});

  	// Gallery
  	$('.gallery a').on('open.simplelightbox', function () {
	  gallery.next();
	});



  $('ul.first').bsPhotoGallery({
    "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
    "hasModal" : true
  });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    var fadeInSpeed = 0;
    var closeButton = $(".lumos-close");

  })();


    

}); // << == Document Ready Function End == >>
  


