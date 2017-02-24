module.exports= UiApp.core.tag.new({
	prototype: 'swiper',
	lifecycle:{
		created( opts={} ){
			this.fetch();
			this.cls={
				root: 'swiper-portfolio',
				};
			this.opts={
				//layout
				spaceBetween:0,
				direction:'vertical',
				//control
				mousewheelControl:true,
				freeMode: true,
				freeModeSticky:true,
				//effects
				parallax:true,
				speed:500,
				//navigation
				nextButton:'.swiper-nav--adj__next',
				prevButton:'.swiper-nav--adj__prev',
				pagination:'.swiper-nav--page',
				paginationType:'fraction',
				//progress
				watchSlidesProgress:true,
				watchSlidesVisibility:true,
				//statechange
				hashnav:true,
				observer:true,
				};
			return this;
			},
		inserted(){
			}
		},//lifecycle
	methods:{
		template: require('./template.bar'),
		},//methods
	});//register