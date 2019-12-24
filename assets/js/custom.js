// << == Document Ready Function Start == >>
$(document).ready(function(){

	// Bootstrap Slider
	$(".carousel-indicators li:first").addClass("active");
 	 $(".carousel-inner .item:first").addClass("active");

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


	//Sliding Menu /Faq
	$('#drawerExample').drawer({ 
	  toggle: true,
	  trigger: '[data-toggle="drawer"]',

	});

	//Start scroll with offset
	$('#myScrollspy a').not('first').on( 'click', function(){
		var offset = 10; // 100px offset because menu height 100px
		$('body').animate( {
		scrollTop: $( $(this).attr('href') ).offset().top - offset + 'px'
		}, 700); // How many time will have been scroll smooth and reach the section..
	});


    

    // Lightbox Gallery
	$(function(){
		var $gallery = $('.gallery a').simpleLightbox();
		
		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
		
	});


			

}); // << == Document Ready Function End == >>
  


	// Venobox for Popup/ Show html file by popup
	/* default settings */
    // $('.venobox').venobox(); 
    /* custom settings */
    $('.venobox_custom').venobox({
    	frameheight: $(window).height() - 50,
        border: ' ',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');