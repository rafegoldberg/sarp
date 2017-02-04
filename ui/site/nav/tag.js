var
tpl= require('./template.bar'),
tag= {
  lifecycle:{
    created(){
      $(this).addClass('nav');
      },
    inserted(){
      this.model && this.render();
      },
    },
  methods:{
    render(){
      this.model &&
        $(this).html( this.template(this.model) );
      }
     }
  };

module.exports= new Tag(tpl,tag);

Bar.registerHelper({
  UiNavUpdate(arg){
    //= RERENDER (sets active link)
    var nav= $('ui-nav')[0];
    nav.model= Object.values(this.API.nav.data);
    nav.render();
    /*\ SET ACTIVE LINK BY HASH
     |=this method fails on descendant
     | pages, though it saves us from
     | an unecessary rerender
    ---
      var//parse page->hash from [arg|ctx]
      hash=Dom.typeOf(arg)=='object'  && ('hash' in arg ) && arg.hash
        || Dom.typeOf(arg)=='string'  &&  arg
        || Dom.typeOf(this)=='object' && ('hash' in this) && this.hash;
      var active_class= 'nav--link=active';
      $(`[ui-hash=${hash}]`)
       .addClass(active_class)
       .siblings('[ui-hash],[ui-link]')
       .removeClass(active_class);
      }
    \*/
    }
  });