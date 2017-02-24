module.exports= UiApp.core.tag.new({
	prototype: 'swiper',
	lifecycle:{
		created( opts={} ){
			// this.$.addClass(this.class.root);
			this.fetch();
			this.klass={
				root: 'swiper-gallery',
				};
			this.opts={
			  observer:true,
			  spaceBetween:0,
			  direction:'horizontal',
			  mousewheelControl:true,
			  // mousewheelForceToAxis:true,
			  // mousewheelInvert:true,
			  freeMode: true,
			  freeModeSticky:true,
			  parallax:true,
			  effect:'fade',
			  fade:{crossfade:true},
			  preloadImages:false,
			  lazyLoading:true,
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