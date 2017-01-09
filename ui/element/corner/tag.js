var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){

			this.bem= {base:'corner'};
			this.classes= [
				this.bem.base,
				this.bem.base+'__edge='+this.model.edge
				];
			console.log( $(this).addClass(this.classes.join(' ')).get(0) );
			}
		}
	};

module.exports= new Tag(tpl,def);