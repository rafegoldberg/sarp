var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){
			this.render();
			}
		}
	};

module.exports= new Tag(tpl,def);