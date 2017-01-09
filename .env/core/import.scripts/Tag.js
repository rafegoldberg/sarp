module.exports= Tag;
//=requires
// 
  var//libraries
  Lo=  require('lodash'),
  Url= require('Url.js');

  var//quickies
  strJSON= require('is-json');
//=dev area
// 
  var
  UiTagLoad= function(url,cƒn){
    var self= this; //=alias this
    var
    url= Url.valid(url)
      ? url
      : Url.resolve(UiApp.opts.ajaxBase||window.location.href,url),
    cƒn= typeof(cƒn)==='function'
      ? cƒn
      : false,
    xhr= $.getJSON(url,json=>{
      self.model= json;
      cƒn && cƒn.call(self,json); //=exec w/ explicit this context
      });

    return xhr;
    }
//=tag opts
// 
  var
  base= {
    lifecycle: {
      created:  function(){
        this.model.load
          && ( this.model=this.model.load );
        this.render();
        },
      inserted: function(){},
      removed:  function(){},
      attributeChanged: function(att,pre,set){
        if( att.indexOf('data-')==0 )
          this.render();
        }
      },
    methods: {
      load: UiTagLoad,
      render: function( use ){
        if( Url.valid(use) || Url.isPath(use) )
          return this.load( use, json=>this.render() );
        if( Dom.typeOf(use)=='object' )
          this.model= use;
        return this;
        },
      data: function(){
        var $$= $(this);
        $$.data(...arguments);
        return $$.data();
        }
      },
    accessors: {
      model: {
        attribute: {
          name: 'data-model'
          },
        get: function(){
          var model= this.data();
          delete model.model;
          return model;
          },
        set: function( use ){
          //=async get json from url 
            if( Url.isPath(use) )
              return this.load( use, json=>this.render() );
          //=parse json from att str 
            if( strJSON(use) )
              this.model= JSON.parse(use);
            else
              this.data(...arguments);
          return this.model;
          }
        }
      },
    events: {}
    },
  base= Dom.register('ui-base',base);
//=tag proto
// 
  function Tag(tpl,tag={}){
    if( typeof tpl!=='function' ){
      if( !arguments.length || Dom.typeOf(arguments[0])!=='object' )
        return console.error('Tag() requires a Handlebars template and/or a xtag configuration obj');
      tag= arguments[0];
      }
    else {
      var
      def= {};

      def.prototype= tag.prototype || !('extend' in tag) ? base.prototype : undefined;
      if( typeof tpl==='function' )
        def.methods= {
          template: tpl,
          render: function( use ){
            $(this).html( this.template(this.model) );
            return this;
            },
          };

      tag= $.extend(true,def,tag);
      }
    Object.assign(this,tag);
    }