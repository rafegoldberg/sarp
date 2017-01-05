module.exports = {
  config: {
    files: [
      'Gruntfile.js',
      '<%=ƒ.app%>/conf/*',
      '<%=ƒ.app%>/data/*'
      ],
    tasks: ['notify:config'],
    options:{
      reload:true
      }
    },
  js:  {
    files: [
      '<%=ƒ.atoms%>/**/*.{js,bar}',
      '<%=ƒ.app%>/core/**/*.js',
      ],
    tasks: [
      'notify:js',
      'ui.js'
      ],
    // options: {interrupt:true}
    },
  css: {
    files: [
      '<%=ƒ.atoms%>/**/*.{css,scss,sass}',
      '<%=ƒ.bower%>/**/*.scss',
      '<%=ƒ.app%>/core/**/*.{scss,sass,css}',
      ],
    tasks: [
      'notify:css',
      'ui.css'
      ],
    options: {interrupt:true}
    },
  icons: {
    files: [
      '<%=ƒ.icons%>/*.svg',
      ],
    tasks: [
      'notify:icn',
      'ui.icn',
      ],
    options: {interrupt:true}
    },
  webStlye: {
    files: [
      '<%=ƒ.serv%>/**/*.css',
      ],
    tasks: ['notify:web'],
    options: {livereload:true}
    },
  web_rest: {
    files: [
      '<%=ƒ.serv%>/**/*.{html,php,svg,png,php,json,js,md}',
      ],
    tasks: ['notify:web'],
    options: {
      livereload:true
      }
    }
  };