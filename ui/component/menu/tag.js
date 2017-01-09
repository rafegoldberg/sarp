var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){}
		}
	};

module.exports= new Tag(tpl,def);