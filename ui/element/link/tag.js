// Api= {
// 	path(strpath){
// 		return `./api/${strpath}`
// 		},
// 	get state(){
// 		History.getState();
// 		},
// 	set state(path,title){
// 		var
// 		title= $('head>title').text().split('::')
// 		state= {

// 			};
// 		History.pushState(state, "State 1", "?state=2");
// 		},
// 	};

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