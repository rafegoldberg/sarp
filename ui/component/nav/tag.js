var
tpl= require('./template.bar'),
def= {
  methods:{
    render(){
      Log.log('<ui-nav/>.render()',{
        mdl: this.model,
        tpl: this.template,
        });
      this.model &&
        $(this).html( this.template(this.model) );
      }
     }
  };

module.exports= new Tag(tpl,def);

Bar.registerHelper({
  UiNavUpdate: function(arg){
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