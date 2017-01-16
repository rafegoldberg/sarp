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
		animateIn(){
			$(this)//@class[loaded]
		    .addClass(`${this.bem.base}=loaded`)
		    .removeClass(`${this.bem.base}=loading`);
			},
		animateOut(ƒn=false){
	    $(this)//@class[loading]
		    .removeClass(`${this.bem.base}=loaded`)
		    .addClass(`${this.bem.base}=loading`);
			$('html,body').animate({scrollTop:0},400,ƒn||null);
			},
		render: function(use){
			var self=this;//@alias[this]
			//=UPDATE MODEL 
				self.model.khtm= self.htmstr(self.model.khtm,'#page');
			//=REPLACE HTML 
				$(self).html( self.template(self.model) );
			return self;
			},
		}
	};
module.exports= new Tag(tpl,def);