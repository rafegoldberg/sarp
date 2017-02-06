var
tasks={
  'ftp-deploy': {
    auth: {
      host: 'rafegoldberg.com',
      port: 21,
      authKey: 'ftp',
      authPath: '<%=ƒ.app%>/data/user.json',
      },
    src:  '<%=ƒ.ftp.from%>',
    dest: '<%=ƒ.ftp.dest%>',
    exclusions: [
      '<%=ƒ.ftp.from%>/**/*',
      '<%=ƒ.ftp.from%>/!templates/*',
      '<%=ƒ.ftp.from%>/!snippets/*',
      ],
    forceVerbose: true
    },
  'ftp-sync': {
    auth: {
      host: 'rafegoldberg.com',
      port: 21,
      authKey: 'ftp',
      authPath: '<%=ƒ.app%>/data/user.json',
      },
    src:  '<%=ƒ.ftp.from%>',
    dest: '<%=ƒ.ftp.dest%>',
    syncMode: false,
    forceVerbose: true,
    exclusions: [
      //=misc files
        '<%=ƒ.ftp.from%>/{,**/}.DS_Store',
      //=Kirby core
        // '<%=ƒ.ftp.from%>/{,**/}.htaccess',
        // '<%=ƒ.ftp.from%>/{,**/}index.php',
        '<%=ƒ.ftp.from%>/kirby',
        '<%=ƒ.ftp.from%>/panel',
        '<%=ƒ.ftp.from%>/thumbs',
      //=Kirby site
        '<%=ƒ.ftp.from%>/content',
        '<%=ƒ.ftp.from%>/site/accounts',
        '<%=ƒ.ftp.from%>/assets/avatars',
      //=Ui assets 
        '<%=ƒ.ftp.from%>/assets/ui/icons',
        // '<%=ƒ.ftp.from%>/assets/ui/ui.js',
        // '<%=ƒ.ftp.from%>/assets/ui/ui.css{,.map}',
      ],
    }
  };
module.exports= function(grunt,options){
  
  /*=SYNC REMOTE->
   deletes orphaned remote files
   */
  if( grunt.option('sync') )
    tasks['ftp-sync'].syncMode=true;

  return tasks
  }//exports