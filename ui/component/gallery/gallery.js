module.exports= UiApp.core.tag.new({
	prototype: 'swiper',
	lifecycle:{
		created( opts={} ){
			this.fetch();
			this.cls={
				root: 'swiper-gallery',
				};
			this.opts={
				//layout
			  spaceBetween:0,
			  direction:'horizontal',
			  //control
			  mousewheelControl:true,
			  freeMode: true,
			  freeModeSticky:true,
			  //effects
				  // effect:'fade',
				  // fade:{crossfade:true},
				  // parallax:true,
			  //loading
			  preloadImages:false,
			  lazyLoading:true,
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