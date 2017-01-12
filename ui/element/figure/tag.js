var
tpl= require('./template.bar'),
tag= {
	extends: 'figure',
	lifecycle: {
		created: function(){
			this.render();
			},
		inserted: function(){
			$(this).children('img')
				.lazyload({
					effect : 'fadeIn',
					container: $('body')
					});
			},
		},
	methods: {
		template: require('./template.bar'),
		}
	};
module.exports= new Tag(tpl,tag);