$(document).ready(function(){

	//=bootstrap initial page model
	// $.getJSON( '/api'+window.location.pathname, obj=>console.log(obj) );

	var//setup portfolio swiper 
	pSwyp= $('ui-portfolio')[0];
	pSwyp.render();

	var//setup gallery swiper 
	gSwyp= $('ui-gallery')[0];
	gSwyp.render();


	pSwyp.swiper.params.control= gSwyp.swiper;
	gSwyp.swiper.params.control= pSwyp.swiper;

	//=swiper extras
	// pSwyp.swiper.on('onProgress', function (swypr,prgrs) { console.log(swypr,prgrs) })

	});///ready