var
tag= {
	extends: 'a',
	accessors:{
		href: {
			attribute: {name:'href'},
			get(){
				var href= $(this).attr('href');
				return Url.valid(href) ? href : `/${href}`;
				}
			},
		api:{
			get(){
				var href= $(this).attr('href');
				return Url.valid(this.href) ? this.href : UiApp.opts.ajaxBase+this.href;
				}
			}
		},
	events:{
		click(){
			event.preventDefault();
			UiApp.api.go(this.href);
			}
		},
	};

module.exports= new Tag(tag);