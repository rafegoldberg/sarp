
var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){
			this.bem= {base:'page'};
			$(this).addClass(this.bem.base);
			},
		},
	mixins: ['dataAttRender'],
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
			var
			self= this,
			anim= 325;

	    $(self).addClass(`${self.bem.base}=loading`).removeClass(`${self.bem.base}=loaded`);
			$('ui-page').animate({opacity:0},anim);
			$('html,body').animate({scrollTop:0},anim*1.25,function(){
				self.uiLast= $(self).children('app-page').detach();

				self.model.khtm= self.htmstr(self.model.khtm,'#page');

				$(self).html( self.template(self.model) );
				
				$('ui-page').animate({opacity:1},anim);
		    $(self).addClass(`${self.bem.base}=loaded`).removeClass(`${self.bem.base}=loading`);
				});
			return self;
			}
		}
	};
module.exports= new Tag(tpl,def);