Bar.registerHelper({
  'UiNavUpdate': function(arg){
  	var//get page->hash from [@arg[obj|str]|@this]
  	hash=Dom.typeOf(arg)=='object'  && ('hash' in arg ) && arg.hash
	  	|| Dom.typeOf(arg)=='string'  &&  arg
	  	|| Dom.typeof(this)=='object' && ('hash' in this) && this.hash;

	  var active_class= 'nav--link=active';
  	$(`[ui-hash=${hash}]`)
  	 .addClass(active_class)
  	 .siblings('[ui-hash],[ui-link]')
  	 .removeClass(active_class);
    }
  });

module.exports = new Tag(require('./template.bar'),{});