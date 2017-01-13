
module.exports= {
  go(path){
    // console.log({naked:path,parsed:this.path(path)})
    var
    page= $('ui-page')[0],
    path= this.path(path),
    load= page.load(path);
    load.then(function(){
      console.log({
        path,
        model:page.model
        });
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
    return path.replace('//',this.base);
    },
  isPath(path){
    if( typeof path==='string' )
      return path.indexOf('/')==0||path.indexOf('./')==0||path.indexOf('../')==0||false;
    }
  }