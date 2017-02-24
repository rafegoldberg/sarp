module.exports= UiApp.core.tag.new({
	prototype: 'swiper',
	lifecycle:{
		created( opts={} ){
			// this.$.addClass(this.class.root);
			this.fetch();
			this.klass={
				root: 'swiper-portfolio',
				};
			this.opts={
			  observer:true,
			  spaceBetween:0,
			  direction:'vertical',
			  mousewheelControl:true,
			  freeMode: true,
			  freeModeSticky:true,
			  parallax:true,
			  watchSlidesProgress:true,
			  watchSlidesVisibility:true,
			  pagination:'.swiper-paged',
			  paginationType:'fraction',
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