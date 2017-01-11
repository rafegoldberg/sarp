
  
module.exports= Tag;
//=require
// 
  var//env  
    Dom= window.Dom =require('x-tag'),
    Bar= window.Bar =require('hbsfy/runtime');
    require('bars.js');
  var//util 
    Lo=  require('lodash');
  var//libs 
    Url= require('Url.js'),
    strJSON= require('is-json');
//=staging
// 
  var
  UiTagLoad= function(url,cƒn){
    var self= this;//alias
    $(self).addClass('ui=load');
    var
    url= typeof(url)==='string' && Url.valid(url)
      ? url
      : Url.resolve(UiApp.opts.ajaxBase||window.location.href,url),
    cƒn= typeof(cƒn)==='function'
      ? cƒn
      : false,
    xhr= $.getJSON(url,json=>{
      self.model= json;
      cƒn && cƒn.call(self,json); //run callback w/explicit this
      $(self)
      .trigger('loaded.ui',self.model)//@hook:event
      .removeClass('ui=load');
      });

    this.modelSrc= url;//store model urls
    return xhr;
    }
//=options
// 
  var
  base= {
    lifecycle: {
      created:  function(){
        this.htm= $(this).html();
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
      render: function(use,silent){
        silent || $(this).trigger('loading.ui');//@hook:event
        if( Url.valid(use) || Url.isPath(use) )
          return this.load( use, json=>this.render(undefined,true) );
        silent || $(this).trigger('rendering.ui');//@hook:event
        if( Dom.typeOf(use)=='object' )
          this.model= use;
        return this;
        },
      data: function(){
        var $$= $(this);
        $$.data(...arguments);
        return $$.data();
        },
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
            return this.load( use , json=>this.render(undefined,true) );
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
      var def= {};
      def.prototype= tag.prototype || !('extend' in tag) ? base.prototype : undefined;
      if( typeof tpl==='function' )
        def.methods= {
          template: tpl,
          render: function(use,silent){
            $(this).html( this.template(this.model) );
            silent && $(this).trigger('rendered.ui',this.model);//@hook:event
            return this;
            },
          };
      tag= $.extend(true,def,tag);
      }
    Object.assign(this,tag);
    }