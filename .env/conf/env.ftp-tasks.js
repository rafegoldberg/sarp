module.exports= {
  'ftp-deploy': {
    auth: {
      host: '10.177.12.130',
      port: 21,
      authPath: '<%=ƒ.app%>/data/user.json',
      authKey: 'rgco',
      forceVerbose: true
      },
    src:  '<%=ƒ.deploy.from%>',
    dest: '<%=ƒ.deploy.dest%>',
    exclusions: ['icons']
    }
  };