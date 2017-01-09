/*=Polyfill
 */  
  require('babel-polyfill');
  require('webcomponents.js');

/*=Libraries
 */
  var 
  $= window.$ =require('jquery'),
  ø= window.ø =require('underscore');

/*=Ui Core
 */

  require('mdnzr.js');
  var
  Dom= window.Dom =require('x-tag'),
  Bar= window.Bar =require('hbsfy/runtime');
  require('bars.js');
  require('modularscale-js');

  var
  Log = window.Log  =require('Log.js'),
  Url = window.Url  =require('Url.js'),
  Tag = window.Tag  =require('Tag.js');


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
    // opts: { ajaxBase:'./ajax/' },
    init: function(opts={}){

      $.extend( true, this.opts, opts );

      Log.grp('Ui','initializing the UI...');
      ø.each(this.queue,function(qƒn,key){
        Log.grp('queue',`-> ${key}()`);
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