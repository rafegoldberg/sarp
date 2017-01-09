var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){
			this.bem= {base:'menu'};
			$(this).addClass(this.bem.base);
			}
		}
	};

module.exports= new Tag(tpl,def);