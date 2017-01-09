var
tpl= require('./template.bar'),
def= {
	methods: {
		created: function(){
			this.model.khtm= this.strip(this.model.khtm,'htmlbody');
			}
		},
	methods: {
		strip: function(htm,key,rpl=''){
			var
			rgx= {
				htmlbody: /^[\s\S]*<body.*?>|<\/body>[\s\S]*$/ig //=strip html>body wrap
				},
			key= typeof(use)==='string' ? rgx[use]||use : ' ';
			return htm.replace(key,rpl);
			},
		grab: function(select){
			var
			$el= $(this.model.khtm);
			return $el.find(select);
			}
		}
	};

module.exports= new Tag(tpl,def);