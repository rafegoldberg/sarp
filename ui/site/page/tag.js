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
		htmstr(htm,key,rpl=''){
			if( typeof(htm)!=='string' )
				return htm;
			var
			rgx= {
				uiPage: /^[\s\S]*<ui-page.*?>|<\/ui-page>[\s\S]*$/ig //=strip html>body wrap
				},
			key= typeof(key)==='string' ? rgx[key]||key : '';
			return htm.replace(key,rpl);
			},//^htmstr
		animateIn(){           
		  var
		  scrdiv= $('html,body');
			$(document).trigger('rendering.ui');//@hook[render]
			$(this)//@class[loaded]
		    .attr('class',this.bem.make({loaded:true,loading:false}));
			},//^animateIn
		animateOut(ƒn=false){  
		  var
		  scrdiv= $('html,body');
			$(document).trigger('rendered.ui');//@hook[rendered]

	    $(this)//@class[loading]
		    .attr('class',this.bem.make({loaded:false,loading:true}));
			scrdiv.animate({//@anim[scrollup+fade]
				scrollTop:(scrdiv.scrollTop()-1250)
				},400,ƒn||null);
			},//^animateOut
		render(use){           
			var self=this;//@alias[this]
			//=add rendered kirby /api/ route response to page mdl
			self.model.khtm= self.htmstr(self.model.API.htm,'uiPage');
			//=render tpl.bar with mdl + replace page htm
			$(self).html( self.template(self.model) );
			},//^render
		}
	};

module.exports= new Tag(tpl,def);


Bar.registerHelper({
  UiPageUpdate(args){
  	console.log({args,self:this});
    }
  });