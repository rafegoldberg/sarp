var
tag= {
	extends: 'a',
	lifecycle: {
		created: function(){}
		},
	events: {
    click: function(){
    	event.preventDefault();
    	UiApp.api.go(this.href);
	    },
		},
	accessors: {
		href: {
			attribute:{
				name: 'href'
				},
			get: function(){
				var href= $(this).attr('href');
				return Url.valid(href) ? href : `//${href}`;;
				}
			}
		}
	};

module.exports= new Tag(tag);