/*=Ui Env
 */
  //=Polyfills 
    require('babel-polyfill');
    require('webcomponents.js');
  //=Libraries 
    var
    //@lib[Underscore]
      ø=window.ø= require('underscore'),
    //@lib[jQuery    ]
      $=window.$= require('jquery');
    //@alias
     window.jQuery=$;

/*=Globals
 */
  require('jquery-lazyload');//@dep[jQuery]@use[$(imgs).lazyload({})]
  require('mdnzr.js');
  require('swiper');//@use[new Swiper]

/*=Ui Core
 */
  var
  Log= window.Log= require('Log.js'),
  Url= window.Url= require('Url.js'),
  Tag= window.Tag= require('Tag.js');//#win[handlebars,xtag,]

/*=Ui Modules
 */
  UiModules= window.UiModules= require('../../ui/*/*/*.js',{
    mode:'hash',
    resolve:['reduce']
    });
  UiModules= Object.keys(UiModules).reduce((map,key,i)=>{
    var val= UiModules[key];
    key= key.split('/').slice(0,2).join('/');
    map[key]= val;
    return map;
    },{});

/*=Ui App
 */
  UiApp= window.UiApp ={
  //@refactor[⬆encapsulate global refs within app obj]
    api:require('./UiApp/api.js'),
    bem:require('./UiApp/bem.js'),
    utl:require('./UiApp/utl.js'),
  //@refactor[⬇extract inline methods to core/imports]
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
          /* @tag: export from ui/{kind}/{module}/tag.js
           * @key: module path
           */
          // Log.log('registerTags()',{'@tag':tag,'@key':key});
          if( !(tag instanceof Tag) )
            return;
          Log.txt(key);
          var//get ui/{kind}/{name}
          tagKind= key.split('/')[0],
          tagName= key.split('/')[1];
          tagName= UiApp.utl.case.un.camel(tagName);
          Dom.register( `ui-${tagName}`, tag );//xtag register as <ui-{tag}>
          });
        },
      },
    };