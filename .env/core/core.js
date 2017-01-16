/*=Ui Env
 */
  //=polyfill
    require('babel-polyfill');
    require('webcomponents.js');
  var//=utilities
    ø= window.ø =require('underscore'),
    $= window.$ =require('jquery');
    window.jQuery=$;
  //=plugins
    require('jquery-lazyload');
    
    require('mdnzr.js');
    require('modularscale-js');
/*=Ui Core
 */
  var
  Log= window.Log= require('Log.js'),
  Url= window.Url= require('Url.js'),
  Tag= window.Tag= require('Tag.js');//@window[handlebars,xtag,]
/*=Ui Modules
 */
  UiModules= window.UiModules =require('../../ui/*/*/*.js',{
    mode:'hash',
    resolve:['reduce']
    });
  UiModules= Object.keys(UiModules).reduce((map,key,i)=>{
    var val= UiModules[key],
        key= key.split('/').slice(0,2).join('/');
    map[key]= val;
    return map;
    },{});
/*=Ui App
 */
  UiApp= window.UiApp ={
    get page(){
      return $('ui-page')[0]
      },
    init: function(opts={}){
      //assign opts
      this.opts= $.extend( true, this.opts, opts );

      Log.gpo('Ui','initializing the UI...');
      ø.each(this.queue,function(qƒn,key){
        Log.gpc('queue',`-> ${key}()`);
          qƒn();
          Log.end();
        });
      Log.end();
      },
    queue: {
      registerTags: function(){
        ø.each(UiModules,function(tag,key){
          //tag module exports object
          //key module kind/name path
          if( !(tag instanceof Tag) )
            return;
          Log.txt(key);
          //=parse ui-tag name from module path
          var
          tagKind= key.split('/')[0],
          tagName= key.split('/')[1];
          Dom.register( `ui-${tagName}`, tag );
          });
        }
      },
    //@refactor:⬆FROM/TO⬇
    api:require('./UiApp/api.js')
    };