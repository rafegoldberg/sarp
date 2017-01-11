var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){}
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
			this.uiLast= $(this).html();
			var self= this;
			$('html,body').animate({scrollTop:0},375,function(){
				self.model.khtm= self.htmstr(self.model.khtm,'#page');
				$(self).html( self.template(self.model) );
				});
			return this;
			}
		}
	};
module.exports= new Tag(tpl,def);