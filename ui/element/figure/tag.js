var
tpl= require('./template.bar'),
tag= {
	extends: 'figure',
	lifecycle: {
		created: function(){
			this.render();
			},
		inserted: function(){
			var//@alias[this]
				wrap=this;
			$(this).children('img')
				.lazyload({
					effect : 'fadeIn',
					threshold: 200,
					load(){
						$(this).removeClass('unload')
						}
					});
			},
		}
	};
module.exports= new Tag(tpl,tag);