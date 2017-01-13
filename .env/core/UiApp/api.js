require('History.js');

History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
  console.groupCollapsed('state changed');
    console.log(History.getState());
    console.groupEnd();
  });

module.exports= {
  go(path){
    // console.log({naked:path,parsed:this.path(path)})
    var
    page= $('ui-page')[0],
    path= this.path(path);
    page
    .load(path)
    .then(function(){
      var state= $.extend(false,{api:path},page.model);
      History.pushState(state,state.title,'/'+state.uri);
      page.render();
      });
    },
  get base(){
    return UiApp.opts.ajaxBase;
    },
  path(path){
    // var
    // Url= require('Url.js'),//@hack
    // uri= Url.resolve(window.location.href,UiApp.opts.ajaxBase)+'/';
    // this.isPath(path) ? path.replace('./api/','./') :`./${path}`;
    // uri= Url.resolve(uri,path);
    // return Url.parse( uri ).path;
    return this.isPath(path)
      ? path.replace('//',this.base).replace('./',this.base)
      : path;
    },
  isPath(path){
    if( typeof path==='string' )
      return !Url.valid(path)&&path.indexOf('/')==0||path.indexOf('./')==0||path.indexOf('../')==0||false;
    }
  }