$(document).ready(function(){

	/*INITIALIZE
	 */
		//=bootstrap page model by url
		// $.getJSON( '/api'+window.location.pathname, obj=>console.log(obj) );

	/*=PORTFOLIO
	 * swiper setup
	 */
		//-setup-->
			var
			pSwypr=  $('ui-portfolio')[0],
			gSwypr=  $('ui-gallery')[0],
			swyprs= $([pSwypr,gSwypr]);
		//-link--->
			var
			SwypCtrl= Uc.after(swyprs.length,function(){
				//=async[runs after n^ times]
				pSwypr.swiper.params.control= gSwypr.swiper;
				gSwypr.swiper.params.control= pSwypr.swiper;
				});
		//-render->
			swyprs.on({
				fetched(){
					this.render();
					SwypCtrl();
					}//fetched
				})//on
		/*-extras->
			pSwypr.swiper.on('onProgress', function (swypr,prgrs) { console.log(swypr,prgrs) })
		 */
		//PORTFOLIO SWIPERS

	});//ready