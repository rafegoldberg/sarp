module.exports= {
  'ftp-deploy': {
    auth: {
      host: 'rafegoldberg.com',
      port: 21,
      authPath: '<%=ƒ.app%>/data/user.json',
      authKey: 'ftp',
      },
    src:  '<%=ƒ.deploy.from%>',
    dest: '<%=ƒ.deploy.dest%>/test',
    exclusions: [
      //=system
      '{,**/}.DS_Store',
      //=kirby core
      '{,**/}.htaccess',
      '{,**/}index.php',
      'kirby',
      'panel',
      'thumbs',
      //=kirby theme
      'assets',
      'content',
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
    src:  '<%=ƒ.deploy.from%>',
    dest: '<%=ƒ.deploy.dest%>',
    forceVerbose: true,
    exclusions: [
      //=misc files
        '<%=ƒ.deploy.from%>/{,**/}.DS_Store',
      //=Kirby core
        '<%=ƒ.deploy.from%>/{,**/}.htaccess',
        '<%=ƒ.deploy.from%>/{,**/}index.php',
        '<%=ƒ.deploy.from%>/kirby',
        '<%=ƒ.deploy.from%>/panel',
        '<%=ƒ.deploy.from%>/thumbs',
      //=Kirby site
        '<%=ƒ.deploy.from%>/content',
        '<%=ƒ.deploy.from%>/site/accounts',
        '<%=ƒ.deploy.from%>/assets/avatars',
      //=Ui assets 
        '<%=ƒ.deploy.from%>/assets/ui/icons',
        '<%=ƒ.deploy.from%>/assets/ui/ui.js',
        '<%=ƒ.deploy.from%>/assets/ui/ui.css{,.map}',
      ],
    }
  };