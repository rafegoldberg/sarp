//=exports
// 
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
    Url= require('Url.js'),//@question[is this already req'd() somewhere?]
    strJSON= require('is-json');

//=mixins
// 
  require('./tag/mix.datamodel.js').register(Dom);
    //^passing register() the Xtag environment var

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

//=base tag
// 
  var
  base= {
    lifecycle:{
      created:  function(){
        this.htm= $(this).html();
        },
      inserted: function(){},
      removed:  function(){},
      },
    mixins:['datamodel'],
    methods:{
      load: UiTagLoad,
      render: function(use){
        if( Url.valid(use) || UiApp.api.isPath(use) )
          return this.load(use);
        if( Dom.typeOf(use)=='object' )
          this.model= use;
        },
      },
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
            return this;
            },
          };
      tag= $.extend(true,def,tag);
      }
    Object.assign(this,tag);
    }