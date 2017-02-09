<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Swiper demo</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

	<!-- Link Swiper's CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css">

	<!-- Demo styles -->
	<style>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans:100,200,400,400i,900');
	html, body {
		position: relative;
		height: 100%;
	}
	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color:#000;
		margin: 0;
		padding: 0;
	}
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	.swiper-container-v {
		background: #eee;
	}
	/*---rg:*/
	:root{
		--ly-edge: 1rem;
		}
	code{
		font-family: Source Code Pro, Source Code, Roboto Mono, monospace;
		padding: .2em;
		border: 1px solid rgba(0,0,0,.125);
		border-radius: 2px;
		}
	#edge{
		z-index: 10;
		position: fixed;
		left: var(--ly-edge);
		bottom: var(--ly-edge);
		display: flex;
		width: calc((100vw - var(--ly-edge)) + 23vw);
		height: 12em;
		border: 0 dotted #777;
		border-width: 0 0 1px 1px;

	  /*quickstyle
	  \*/
		  display: flex;
		  justify-content: flex-end;
		  align-items: flex-end;
		  font-style: italic;
		  font-family: serif;
		}
	#title{
		z-index: 10;
		position: fixed;
		bottom: 0;
		left: calc(var(--ly-edge)*1.5);
		font-family: Fira Sans, sans-serif;
		font-weight: 900;
		}
	</style>

	<!-- swiper z -->
	<div class="swiper-container swiper-container-z">
		<h1 id="title">Sarp</h1>
		<div id="edge" data-swiper-parallax="-23%" data-swiper-parallax-x>fin.</div>
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<code>Z0</code>
				<script>console.log(<?=json_encode($site->find("projects")->toArray())?>)</script>
			</div>
			<div class="swiper-slide">
				<!-- swiper v -->
				<div class="swiper-container swiper-container-v">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><code>Z1|V0</code></div>
						<div class="swiper-slide"><code>Z1|V1</code></div>
						<div class="swiper-slide"><code>Z1|V2</code></div>
					</div>
					<!-- pagination -->
					<div class="swiper-pagination swiper-pagination-v"></div>
				</div>
			</div>
		</div>
	</div>

<!-- Swiper -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>
	<script>
	var swiperZ = new Swiper('.swiper-container-z',{
		mousewheelControl: true,
		mousewheelForceToAxis: true,
		mousewheelInvert: true,

		parallax: true,
		spaceBetween: 0,
		});
	var swiperV = new Swiper('.swiper-container-v',{

		direction: 'vertical',

		freeMode: true,
		freeModeSticky: true,
		mousewheelControl: true,
		mousewheelForceToAxis: true,
		mousewheelInvert: true,

		spaceBetween: 0,
		pagination: '.swiper-pagination-v',
		});
	 </script>
	<script id="ui@reload=js" src="http://localhost:35729/livereload.js"></script>
</body>
</html>