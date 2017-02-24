module.exports= Dom.register('ui-swiper',{
	lifecycle:{
		created(opt){
			this.$= $(this),
			this.options= {};
			return this;
			},
		inserted(){
			this.$.addClass('swiper-container '+this.klass.root);
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
		fetch( ƒn=null, root='/api/portfolio' ){
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
			.then( ƒn && ƒn.call(this,this) );
			return this;
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
	events:{
		render(){ console.log('render 1') }
		},//methods
	});//register