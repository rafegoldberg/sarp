/*=Ui Env
 */
  //=Polyfills 
  require('babel-polyfill');
  require('webcomponents.js');
  require('mdnzr.js');
  //=Libraries
  var
  $=window.jQuery= require('jquery'),
  _=window.uScore= require('underscore');

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
    init(opts={}){
      console.log('UiApp.init()');
      },
    };