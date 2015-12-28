/*Corey Gumbs
	12.18.2015
	Rich Media Optimization
	Final Project
	Full Sail University
	Heather Arbuckle-Instructor */

$(document).ready(function(){

	//audio slide bxslider options
  $('.audio-slide').bxSlider({
  	slideWidth: 350,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 3,
    slideMargin: 20
  });

  //video slide bxslider options
  $('.video-slide').bxSlider({
  	infiniteLoop: false,
  	hideControlOnEnd: false,
  	video: false,
  	slideWidth: 960,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 20
  });

  //lightbox picture parameters
   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

});


