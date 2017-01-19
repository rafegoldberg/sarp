require('History.js');

module.exports= {
  //utils
  get page(){
    return UiApp.page;
    },
  get base(){
    return UiApp.opts.ajaxBase;
    },
  path(path){
    return [this.base,path].join('/').replace(/(\/)+/g,'/');
    },
  isPath(path){
    if( typeof path==='string' )
      return !Url.valid(path)&&path.indexOf('/')==0||path.indexOf('./')==0||path.indexOf('../')==0||false;
    },
  //methods
  go(path='/'){
    event && event.preventDefault();
    this.get(path,route=>{
      if( route.mdl && route.ttl && route.url ){
        route.mdl['UiAjaxResponse']= ø.omit(route,'mdl');//give tpl.bar access
        History.pushState(route.mdl,route.ttl,route.url);
        }
      });
    },
  get(path='/',ƒn=false){
    $.getJSON( this.path(path), route=>{
      console.log('%capi::%c%s\n%O','font-weight:bold;color:cyan','font-weight:normal;color:magenta',route.url,route)
      ƒn && ƒn.call(UiApp.page,route);
      } );
    },
  }