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
  var
  UiApp= window.UiApp ={
    init(opts={}){
      // console.log('UiApp.init()');
      },
    modules:require('../../ui/*/*/*.js',{mode:'hash',resolve:[
      'reduce-prefix',
      'strip-ext',
      function dirParent( base, files, config ){
        var R= Object.keys(files).reduce(function(rslv,file){
          var split= files[file].split('/');
          rslv[file]= split[split.length-2];
          return rslv;
          },{});
        return R;
        }
      // 'path-reduce',
      // 'reduce-postfix',
      ]}),
    plugin:require('./UiApp/plugins/*.js',{mode:'hash'}),
    fn:require('./UiApp/*.js',{mode:'hash'}),
    };
/*=Ui Modules
 */
  UiApp.modules= Object.keys(UiApp.modules).reduce((map,key,i)=>{
    var val= UiApp.modules[key];
    key= key.split('/').slice(0,2).join('/');
    map[key]= val;
    return map;
    },{});