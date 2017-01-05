//=exports
// 
  module.exports= Tag;

//=require
// 
  var//libraries
  Lo=  require('lodash'),
  Url= require('Url.js');

  var//quickies
  strJSON= require('is-json');

//=staging
// 
  var
  TagLoadMethod= function(url,cƒn){
    // console.debug('load.top:%O',{args:arguments,self:this})
    // console.log(' pre->',url);
    var self= this,
        url= Url.valid(url) ? url : Url.resolve(Ds.opts.ajaxBase||window.location.href,url);
    // console.log('post->',url);
      var
        cƒn= typeof(cƒn)==='function'
          ? cƒn
          : false,
        xhr= $.getJSON(url,json=>{
          // Log.txt('AJAX DONE');
          self.model=json;
          cƒn && cƒn.call(self,json); //=explicit this
          });
    return xhr;
    }

//=register
// 
  var
  base= {
    test: 'rafe',
    lifecycle: {
      created:  function(){
        // console.debug('ini %O',{args:arguments,self:this});
        this.render();
        },
      inserted: function(){
        // console.debug('inj %O',{args:arguments,self:this});
        },
      removed:  function(){
        // console.debug('rmv %O',{args:arguments,self:this});
        },
      attributeChanged: function(att,pre,set){
        if( att.indexOf('data-')==0 )
          // console.debug('data %O',{att,pre,set,self:this});
          this.render();
        }
      },
    methods: {
      load: TagLoadMethod,
      render: function( use ){
        // console.debug('render.top:%O',{args:arguments,self:this,data:Object.assign({},this.data)});
        if( Url.valid(use) || Url.isPath(use) )
          return this.load( use, json=>this.render() );
        if( Dom.typeOf(use)=='object' )
          this.model= use;
        return this;
        },
      data: function(){
        var $$= $(this);
        $$.data(...arguments);
        // console.debug('data.top:%O',{data:$$.data(),self:this})
        return $$.data();
        }
      },
    accessors: {
      model: {
        attribute: {
          name: 'data-model'
          },
        get: function(){
          // console.debug('get[model]%O',{model:$(this).data(),self:this});
          return this.data();
          },
        set: function( use ){
          if( Url.isPath(use) )
            return this.load( use, json=>this.render() );
          if( strJSON(use) )
            this.model= JSON.parse(use);
          else
            this.data(...arguments);
          return this.model;
          // console.debug('set[model]%O',{model:$(this).data(),self:this});
          }
        }
      },
    events: {}
    },
  base= Dom.register('ui-base',base);

//=export
// 
  function Tag(tpl,tag={}){
    if( typeof tpl!=='function' ){
      if( !arguments.length || Dom.typeOf(arguments[0])!=='object' )
        return console.error('Tag() requires a Handlebars template and/or a xtag configuration obj');
      tag= arguments[0];
      }
    else {
      var
      def= {
        prototype: tag.prototype || !('extend' in tag)? base.prototype :undefined,
        methods: {
          template: tpl,
          render: function( use ){
            // console.debug('render.sub:%O',{args:arguments,model:this.model},this)
            $(this).html( this.template(this.model) );
            return this;
            }
          },
        },
      tag= $.extend(true,def,tag);
      }
    Object.assign(this,tag);
    }