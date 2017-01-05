/*=Polyfill
 */  
  require('babel-polyfill');
  require('webcomponents.js');

/*=Libraries
 */
  var 
  // $= require('jquery');
  $= window.$ =require('jquery'),
  ø= window.ø =require('underscore');

/*=Ui Core
 */

  //=modernizr
    require('mdnzr.js');
  //=xtag 
    var Dom= window.Dom =require('x-tag');
  //=bars 
    var Bar= window.Bar =require('hbsfy/runtime');
    require('bars.js');

  //=ui style 
    require('modularscale-js');
  //=ui core  
    var
    Log= window.Log =require('Log.js'),
    Url= window.Url =require('Url.js'),
    Tag= window.Tag =require('Tag.js');

/*=Ui Modules
 */
  Ui= window.Ui =require('../../ui/*/*/*.js',{
    mode:'hash',
    resolve:['reduce']
    });
  Ui= Object.keys(Ui).reduce((map,key,i)=>{
    var val= Ui[key],
        key= key.split('/').slice(0,2).join('/');
    map[key]= val;
    return map;
    },{});

/*=Ds App
 */
  Ds= window.Ds ={
    opts: {
      ajaxBase: './ajax/'
      },
    init: function(opts={}){

      $.extend( true, this.opts, opts );

      Log.grp('Ds.init()','initializing the UI...');
      ø.each(this.queue,function(qƒn,key){
        Log.grp('queue',`-> ${key}()`);
          qƒn();
          Log.end();
        });
      Log.end();
      },
    queue: {
      register: function(){
        ø.each(Ui,function(val,key){
          if( !(val instanceof Tag) )
            return;
          Log.txt(key);

          var tag= key.split('/')[1];
          Dom.register( `ui-${tag}`, val );
          });
        }
      }
    };