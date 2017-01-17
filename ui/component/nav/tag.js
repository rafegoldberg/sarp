Bar.registerHelper({
  'UiNavUpdate': function(arg){
  	var
  	hash=Dom.typeOf(arg)==='object' && 'hash' in arg && arg.hash
	  	|| Dom.typeOf(arg)==='string' &&  arg
	  	|| Dom.typeof(this)==='object' && 'hash' in this && this.hash;

  	$(`[ui-hash=${hash}]`)
    },
  });

module.exports = new Tag(require('./template.bar'),{})