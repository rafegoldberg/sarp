var
tpl= require('./template.bar'),
tag= {
	extends: 'figure',
	lifecycle: {
		created: function(){
			this.render();
			$(this).addClass('ui-figure loading');
			},
		inserted: function(){
			var//@alias[this]
				wrap=this;
			$(this).children('img')
				.lazyload({
					effect : 'fadeIn',
					threshold: 200,
					load(){
						var
						fig= $(this).closest('[is=ui-figure]');
						fig.removeClass('loading').trigger('load.ui');
						}
					});
			},
		}
	};
module.exports= new Tag(tpl,tag);