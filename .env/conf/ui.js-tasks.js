module.exports= {
  browserify: {
    options: {
      transform: [
        ['require-globify'],
        ['babelify',{ presets:['es2015']  }],
        ['hbsfy',   { extensions:['bar'] }],
        ],
      browserifyOptions: {
        debug: true,
        paths: ['node_modules','ui','<%=ƒ.js.core%>'],
        noParse: ['jquery','underscore']
        },
      },
    files: {
      '<%=ƒ.js.dist%>': [
        '<%=ƒ.js.main%>',
        '<%=ƒ.atoms%>/*/*.{bar,}',
        ]
      }
    },
  uglify: {
    files: {
      '<%=ƒ.js.mini%>': ['<%=ƒ.js.dist%>']
      },
    //-PROD->
    options: { sourceMap:true }
    //-DEV->
    // options: {
    //   sourceMap: false,
    //   compress: false,
    //   mangle: false,
    //   } 
    },
  clean: [
    '<%=ƒ.dist%>/*.js{,.map}',
    '<%=ƒ.bundl%>/*.js{,.map}',
    ],
  copy: {
    expand: true,
    cwd: '<%=ƒ.dist%>',
    dest: '<%=ƒ.bundl%>/',
    src: ['**/*.js{,.map}']
    },
  };