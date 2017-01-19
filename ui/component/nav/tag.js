var
tpl= require('./template.bar'),
def= {
  methods:{
    render(){
      this.model &&
        $(this).html( this.template(this.model) );
      }
     }
  };

module.exports= new Tag(tpl,def);

Bar.registerHelper({
  UiNavUpdate: function(arg){
    var nav= $('ui-nav')[0];
    nav.model= Object.values(this.UiAjaxResponse.nav.data);
    nav.render();
    var//get page->hash from [@arg[obj|str]|@this]
    hash=Dom.typeOf(arg)=='object'  && ('hash' in arg ) && arg.hash
      || Dom.typeOf(arg)=='string'  &&  arg
      || Dom.typeOf(this)=='object' && ('hash' in this) && this.hash;

    var active_class= 'nav--link=active';
    $(`[ui-hash=${hash}]`)
     .addClass(active_class)
     .siblings('[ui-hash],[ui-link]')
     .removeClass(active_class);
    }
  });