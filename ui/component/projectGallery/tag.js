var
tag= {
	lifecycle:{
		created(){
			//tidy dom
			$('app-stage').remove();
			//configure
			$(this)
			.addClass('swiper-container');
			},
		inserted(){
			this.render();
			}
		},
	mixins: ['datamodel'],
  methods:{
  	defs:{
			direction:'vertical',
			freeMode:true,
				freeModeSticky:true,
				freeModeMomentumRatio:1.0625,
				freeModeMomentumVelocityRatio:.9375,
			mousewheelControl:true,
				mousewheelSensitivity:2,
				mousewheelReleaseOnEdges:true,
			keyboardControl:true,
			pagination: 'swpr-nav',
			paginationType:'bullets',
			},
		template:require('./template.bar'),
    render(){
      if( this.model && this.template ){
      	//=[render tpl html w mdl data]->
	      	var
	      	rendered= this.template(this.model);
	      //=[inject html in to the tag ]->
		      $(this).html(rendered);
				//=[initialize swiper instance]->
					// console.warn('will init Swiper now');
					return new Swiper(this,this.defs);
	      }
      }
     }
  };

module.exports= new Tag(tag);