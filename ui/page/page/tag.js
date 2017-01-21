var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){
			this.bem= {root:'page'};                   //=BEM->base class
			this.bem.make= UiApp.bem.it(this.bem.root);//     >generator
			},
		inserted: function(){
			$(this).addClass(this.bem.make());
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
			$(document).trigger('rendering.ui');//@hook[render]
			$(this)//@class[loaded]
		    .attr('class',this.bem.make({loaded:true,loading:false}));
			},
		animateOut(ƒn=false){
			$(document).trigger('rendered.ui');//@hook[rendered]
	    $(this)//@class[loading]
		    .attr('class',this.bem.make({loaded:false,loading:true}));
			$('html,body').animate({scrollTop:0},400,ƒn||null);
			},
		render: function(use){
			var self=this;//@alias[this]
			//=UPDATE MODEL 
				self.model.khtm= self.htmstr(self.model.API.htm,'#page');
			//=REPLACE HTML 
				$(self).html( self.template(self.model) );
			},
		}
	};
module.exports= new Tag(tpl,def);