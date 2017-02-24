var//dependencies
ø= require('underscore');

module.exports= Dom.register('ui-swiper',{
	lifecycle:{
		created(opt){
			this.$= $(this),
			this.options= {};
			return this;
			},
		inserted(){
			this.$.addClass('swiper-container '+this.cls.root);
			},
		},//lifecycle
	accessors:{
		opts:{
			set( opts ){
				this.options= $.extend(this.options,this.$.data(),opts);
				return this;
				},
			get(){
				return this.options;
				}
			}//opts
		},//accessors
	methods:{
		/*OLD->
			fetch( fn=null, root='/api/portfolio' ){
				var
				self= this;
				$.getJSON(
					root,
					Pg=>Pg.sub.reduce((all,sub,idx,org)=>{
				    all[sub.uri]= Uc.create({
				      get img(){ return [this.contentUrl,sub.content.cover].join('/') },
				      get ttl(){ return this.content.title },
				      get txt(){ return this.uid },
				      },sub);
				    return all;
				    }, (self.model={}) )//reduce
			    )//getjson
				.then( fn && fn.call(this,this) );
				return this;
				},
		 ^OLD*/
		//NEW->
		fetch( cfn=null, uri='/api/portfolio' ){
			var//alias
			self= this;

			$(self).trigger('fetching');//@event

			var//args
			cfn= cfn && typeof(cfn)==='function'
				? cfn
				: function(){/*default*/};
			$.getJSON(
				uri,
				Pg=>Pg.sub.reduce((all,sub,idx,org)=>{
			    all[sub.uri]= Uc.create({
			      get img(){ return [this.contentUrl,sub.content.cover].join('/') },
			      get ttl(){ return this.content.title },
			      get txt(){ return this.uid },
			      },sub);
			    return all;
			    }, (self.model={}) )//reduce
		    )//getjson
			.then( ø.wrap(cfn,function(fn){
				var
				rtn= fn.call(self,self);//callback
				$(self).trigger('fetched');//@event
				return rtn;
				}) );
			return self;
			},
		render(){
			if( 'swiper' in this )
				this.swiper.destroy();
			if( this.template && this.model ){
				var htm= this.template( this.model );
				this.$.html(htm);
				this.swiper= new UiApp.plug.swiper( this, this.opts );
				}
			return this;
			}
		},//methods
	});//register