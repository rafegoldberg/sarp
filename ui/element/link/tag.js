var
tag= {
	lifecycle: {
		created(){
			$(this).on('click',UiApp.page.route);
			}
		},
	extends: 'a',
	accessors: {
		href: {
			attribute:{
				name: 'href'
				},
			get: function(){
				var href= $(this).attr('href');
				return Url.valid(href) ? href : `/${href}`;
				}
			},
		api: {
			get: function(){
				var href= $(this).attr('href');
				return Url.valid(this.href) ? this.href : UiApp.opts.ajaxBase+this.href;
				}
			}
		},
	// events: {
	// 	click: function(){
	// 		event.preventDefault();
	// 		// UiApp.page.route(this.href);
	// 		Log.log('ui-link:click',this.href);
	// 		}
	// 	},
	};

module.exports= new Tag(tag);