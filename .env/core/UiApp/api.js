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
    event.preventDefault();
    this.get(path,(mdl,ttl,url)=>{
      History.pushState(mdl,ttl,url);
      });
    },
  get(path='/',ƒn=false){
    $.getJSON( this.path(path), obj=>{
      console.log('%capi::%c%s\n%O','font-weight:bold;color:cyan','font-weight:normal;color:magenta',obj.url,obj)
      ƒn && ƒn.call(UiApp.page,...Object.values(obj));
      } );
    },
  }