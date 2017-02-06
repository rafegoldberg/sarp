<?#=Swiper Markup
?><div
 id="swp"
 class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			Slide 1</div>
		<div class="swiper-slide">
			Slide 2</div>
		<div class="swiper-slide">
			Slide 3</div>
	 </div>
	 <swpr-nav></swpr-nav>
	<!--{
	 OPTIONAL:
	  <!-navigation->
			<swpr-btn.swiper-button-prev/>
			<swpr-btn.swiper-button-next/>
	  <!-pagination->
			<swpr-nav/> 
	  <!-scrollbar->
			<swpr-bar/>
	 }-->
	</div>
<style>
	/*=Ui Overrides
	 */
		app-page{
		  padding:0;
		  }
		ui-page{
		  min-height:100vh;
		  }
	/*=Swiper Styles
	 */
	/*-wrapper->*/
		.swiper-container{
		  height: 100vh;
		  width: 33em;
		  max-width: 100%;
		  }
	/*-slides-->*/
		.swiper-slide{
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  box-sizing: border-box;
		  max-height: 100%;
		  max-width: 100%;
			border: 0 solid transparent;
			transition: border .375s 0s;
			background-color: #f5f4ef
		  }
		.swiper-slide-active{
			border: .4em solid currentColor;
			transition: border .375s .5s;
			}
	/*-pagenav->*/
		.swiper-pagination-bullets{
		  z-index:9;
		  position:fixed;
		  right: 0;
		  top: 0;
		  display:flex;
		  flex-flow:nowrap column;
		  justify-content: space-between;
		  align-items: center;
		  height:100vh;
		  width:.38em;
		  }
		.swiper-pagination-bullet{
		  flex: 1;
		  opacity:1;
		  box-sizing:border-box;
		  height:100%;
		  width:0px;
		  width:.38em;
		  margin: 0 auto !important;
		  background-color:rgba(255,255,255,.125);
		  border-radius:0;
		  border-right: 1px dashed currentColor;
		  transition: .25s 0s ease-in;
		  }
		.swiper-pagination-bullet+.swiper-pagination-bullet{
		  margin-top:2px!important;
		  }
		.swiper-pagination-bullet-active,
		.swiper-pagination-bullet:hover{
		  background-color: currentColor;
		  transition: .25s .125s ease;
		  }
		.swiper-pagination-bullet:hover{
		  opacity:.375;
		  }
		.swiper-pagination-bullet-active{
		  opacity:1!important;
		  }
</style>
<script>function runTest_swiper(opts={},wrap='#swp'){
	//tidy dom
	$('app-stage').remove();
	// initialize swiper
	var defs={
		direction:'vertical',

		freeMode:true,
		freeModeSticky:true,

		mousewheelControl:true,
			mousewheelSensitivity:2,
			// mousewheelReleaseOnEdges:true,
		keyboardControl:true,
			
		// pagination: 'swpr-nav',
		// paginationType:'bullets',
		};//opt
	return new Swiper(wrap,$.extend(defs,opts));//swiper	
	}
 </script>