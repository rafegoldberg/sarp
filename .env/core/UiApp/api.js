require('History.js');

module.exports= {
  go(path){
    var
    page= $('ui-page')[0],
    path= this.path(path),
    call= function(){
      var state= $.extend(false,{api:path},page.model);
      console.log('navigate:trigger',$('ui-page')[0].model);
      History.pushState(state,state.title,'/'+state.uri);
      page.render();
      };
    page.load(path).then(call)
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
      : !Url.valid(path)
        && `//${path}`
        || path;
    },
  isPath(path){
    if( typeof path==='string' )
      return !Url.valid(path)&&path.indexOf('/')==0||path.indexOf('./')==0||path.indexOf('../')==0||false;
    }
  }

History.Adapter.bind(window,'statechange',function(){
  console.log('navigate:event');
  // var
  // page= $('ui-page')[0],
  // uris= {
  //   hist: History.getState().data.api.replace(UiApp.opts.ajaxBase,''),
  //   page: UiApp.api.path(page.model.uri)
  //   };
  // if( uris.page !== uris.hist ){
  //   UiApp.api.go('//'+uris.hist,true).then(page.render);
  //   }
  // else page.render();
  });