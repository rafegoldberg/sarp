/*=Ui Env
 */
  //=Polyfills 
  require('babel-polyfill');
  require('webcomponents.js');
  require('history.js/scripts/bundled/html5/native.history.js');
  //=Libraries
  var
  $=  window.$  =require('jquery'),
  Uc= window.Uc =require('underscore');
  //alias
   window._= Uc;
/*=Ui App
 */
  UiApp= window.UiApp ={
    init(opts={}){},
    plug:require('./UiApp/plugins/*.js',{mode:'hash'}),
    core:require('./UiApp/*.js',{mode:'hash'}),
    };
/*=Ui Modules
 */
  UiApp.modules= require('../../ui/*/*/*.js',{
    mode:'hash',
    resolve:[
      'reduce-prefix','strip-ext',
      ( base, files, config )=>{//parent:file
        var R= Object.keys(files).reduce(function(rslv,file){
          var split= files[file].split('/');
          rslv[file]= split[split.length-2];
          return rslv;
          },{});
        return R;
        }
      ]});//modules,
  UiApp.modules= Object.keys(UiApp.modules).reduce((map,key,i)=>{
    var
    xpt= UiApp.modules[key];

    if( xpt instanceof UiApp.core.tag.new )
      xpt= UiApp.core.tag.register(`ui-${key}`,xpt);

    //update val
    map[key]= xpt;

    return map;
    },{});