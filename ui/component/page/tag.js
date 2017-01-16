var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){
			this.bem= {base:'page'};
			$(this).addClass(this.bem.base);
			},
		},
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