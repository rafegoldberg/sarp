var
tag= {
	extends: 'a',
	lifecycle: {
		created: function(){}
		},
	events: {
    click: function(){
    	event.preventDefault();
    	$('ui-page').get(0).load('./api/'+$(this).attr('href'));
    	$(this).trigger('navigate.ui');
	    },
		}
	};

module.exports= new Tag(tag);