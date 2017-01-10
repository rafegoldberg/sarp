var
tpl= require('./template.bar'),
def= {
	lifecycle: {
		created: function(){}
		},
	methods: {
		htmstr: function(htm,key,rpl=''){
			if( typeof(htm)!=='string' )
				return htm;
			var
			rgx= {
				htmlbody: /^[\s\S]*<body.*?>|<\/body>[\s\S]*$/ig //=strip html>body wrap
				},
			key= typeof(key)==='string' ? rgx[key]||key : '';
			return htm.replace(rpl,key);
			},
		}
	// accessors: {
	// 	model: {
	// 		get:function(){
	// 			}
	// 		}
	// 	}
	};
module.exports= new Tag(tpl,def);