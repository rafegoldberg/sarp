module.exports= {
  //=respawn grunt 
    config:
      { options:{
        title: 'ui.env',
        message: 'config respawned...'
        }},
  //=watch + build 
    start:
      { options:{
        title: 'ui.env',
        message: 'spooling server...'
        }},
  //=partial build 
    js:  
      { options:{
        title: 'ui.ds.scripts',
        message: 'building js...'
        }},
    css: 
      { options:{
        title: 'ui.ds.styles',
        message: 'compiling scss...'
        }},
    icn: 
      { options:{
        title: 'ui.ds.icons',
        message: 'rendering svg...'
        }},
  //=server reload 
    web: 
      { options:{
        title: 'ui.web',
        message: 'refreshing...'
        }},
  //=commit + push 
    deploy:
      { options:{
        title: 'ui.ftp',
        message: 'pushing dist/ to <%=usr.ftpstage.host%>...'
        }},
  //=post install  
    dependencies:
      { options:{
        title: 'ui.env.deps',
        message: 'installing dependencies...'
        }},
    credentials:
      { options:{
        title: 'ui.env.creds',
        message: 'updating user credentials...'
        }},
  }