require('History.js');

module.exports= {
  get base(){
    return UiApp.opts.ajaxBase;
    },
  path(path){
    var
    path= [
      this.base,
      path
      ]
    .join('/')
    .replace(/(\/)+/g,'/');
    return path;
    // return this.isPath(path)
    //   ? path.replace('//',this.base).replace('./',this.base)
    //   : !Url.valid(path)
    //     && `//${path}`
    //     || path;
    },
  isPath(path){
    if( typeof path==='string' )
      return !Url.valid(path)&&path.indexOf('/')==0||path.indexOf('./')==0||path.indexOf('../')==0||false;
    }
  }