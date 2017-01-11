/*=Ui Env
 */
  //=polyfill
    require('babel-polyfill');
    require('webcomponents.js');
  var//=utilities
    $= window.$ =require('jquery'),
    ø= window.ø =require('underscore');
  //=plugins
    require('mdnzr.js');
    require('modularscale-js');
/*=Ui Core
 */
  var
  Log = window.Log  =require('Log.js'),
  Url = window.Url  =require('Url.js'),
  Tag = window.Tag  =require('Tag.js');//@window[handlebars,xtag,]
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
    opts: { ajaxBase:'./api' },
    init: function(opts={}){

      $.extend( true, this.opts, opts );

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
        ø.each(UiModules,function(val,key){
          if( !(val instanceof Tag) )
            return;
          Log.txt(key);

          var tag= key.split('/')[1];
          Dom.register( `ui-${tag}`, val );
          });
        }
      }
    };