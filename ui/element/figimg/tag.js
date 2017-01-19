var
tpl= require('./template.bar'),
tag= {
	extends: 'figure',
	lifecycle: {
		created: function(){
			$(this).addClass('loading');
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
						var
						fig= $(this).closest('[is=ui-figure]');
						fig.removeClass('loading').trigger('load.ui');
						}
					});
			},
		},
	methods: {
		get bemRoot(){ return 'figimg' },
		}
	};
module.exports= new Tag(tpl,tag);