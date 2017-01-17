
  
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
    var//@alias[this]
      self= this;
    var
    cƒn= typeof(cƒn)==='function'? cƒn:false,
    xhr= $.getJSON(url,json=>{
      self.model= json;
      cƒn && cƒn.call(self,json); //run callback w/explicit this
      });
    this.modelSrc= url;//store model urls
    return xhr;
    }
  Dom.mixins.dataAttRender= {
    lifecycle: {
      attributeChanged: function(att,pre,set){
        if( att.indexOf('data-')==0 )
          this.render();
        }
      }
    };
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
      },
    methods: {
      load: UiTagLoad,
      render: function(use){
        if( Url.valid(use) || UiApp.api.isPath(use) )
          return this.load(use);
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
          var self=this;//@alias[this]
          //=async get json from url 
          if( Url.valid(use) || UiApp.api.isPath(use) ) 
            return self.load(use);
          //=parse json from att str 
          if( strJSON(use) ) 
            self.model= JSON.parse(use);
          else 
            self.data(...arguments);
          return self.model;
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
          render: function(use){
            $(this).html( this.template(this.model) );
            //$(this).trigger('rendered.ui',this.model);//@hook:event
            return this;
            },
          };
      tag= $.extend(true,def,tag);
      }
    Object.assign(this,tag);
    }