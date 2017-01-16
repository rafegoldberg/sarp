Dom.mixins.api= {
	methods:{
		go(path='/'){
		  event.preventDefault();
		  UiApp.page.route(path,(mdl,ttl,url)=>{
		  	console.log({mdl,ttl,url})
		    History.pushState(mdl,ttl,url);
		    });
		  },
		route(path='/',ƒn=false){
			var//@alias[this]
				self= this;
			var
			uri= UiApp.api.path(path);
			$.getJSON( uri, obj=>ƒn.call(self,...Object.values(obj)) );
			},
		},
	};

var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){
			this.bem= {base:'page'};
			$(this).addClass(this.bem.base);
			},
		},
	mixins: ['api'],
	methods: {
		htmstr: function(htm,key,rpl=''){
			if( typeof(htm)!=='string' )
				return htm;
			var
			rgx= {
				'#page': /^[\s\S]*<ui-page.*?>|<\/ui-page>[\s\S]*$/ig //=strip html>body wrap
				},
			key= typeof(key)==='string' ? rgx[key]||key : '';
			return htm.replace(key,rpl);
			},
		render: function(use){
			var//@alias[this]
				self=this;
			//=UPDATE MODEL  
				self.model.khtm= self.htmstr(self.model.khtm,'#page');
			//=ANIMATE+SET
	    $(self)//@class[loading]
		    .addClass(`${self.bem.base}=loading`)
		    .removeClass(`${self.bem.base}=loaded`);
			$('html,body').animate({scrollTop:0},400,after=>{
				$(self).html( self.template(self.model) );
				$(self)//@class[loaded]
			    .addClass(`${self.bem.base}=loaded`)
			    .removeClass(`${self.bem.base}=loading`);
				});

			return self;
			},
		}
	};
module.exports= new Tag(tpl,def);