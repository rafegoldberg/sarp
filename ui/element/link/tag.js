var
tag= {
	lifecycle: {
		created(){
			/*=MOVED TO EVENTS->
				var self=this;//@alias[this]
				$(self).on('click',function(e){ UiApp.api.go(self.href) });
			 */
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
	events: {
		click(){
			event.preventDefault();
			UiApp.api.go(this.href);
			}
		},
	};

module.exports= new Tag(tag);