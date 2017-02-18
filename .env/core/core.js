/*=Ui Env
 */
  //=Polyfills 
  require('babel-polyfill');
  require('webcomponents.js');
  //=Libraries
  var
  $= window.$ =require('jquery'),
  ø= window.ø =require('underscore');

/*Ui Magic
 */
  require('jquery-mockjax')(window.$,window);

/*=Ui App
 */
  UiApp= window.UiApp ={
    init(opts={}){
      // console.log('UiApp.init()');
      },
    plug:require('./UiApp/plugins/*.js',{mode:'hash'}),
    core:require('./UiApp/*.js',{mode:'hash'}),
    modules:require('../../ui/*/*/*.js',{
      mode:'hash',
      resolve:[
        'reduce-prefix',
        'strip-ext',
        ( base, files, config )=>{//parent:file
          var R= Object.keys(files).reduce(function(rslv,file){
            var split= files[file].split('/');
            rslv[file]= split[split.length-2];
            return rslv;
            },{});
          return R;
          }
        ]})//modules,
    };
/*=Ui Modules
 */
  UiApp.modules= Object.keys(UiApp.modules).reduce((map,key,i)=>{
    var val= UiApp.modules[key];
    key= key.split('/').slice(0,2).join('/');
    map[key]= val;
    return map;
    },{});