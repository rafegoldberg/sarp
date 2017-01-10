var
tasks= {
	sass_globbing: {
    files: {
      '<%=ƒ.sass.temp%>': [
	      '<%=ƒ.sass.main%>',
	      '<%=ƒ.sass.core%>/config/*.scss',
	      '<%=ƒ.sass.core%>/{base,generic,layout}/*.scss',
	      '<%=ƒ.sass.atom%>'
	      ]
      },
    options: {
      useSingleQuotes: true,
      signature: '//=dsUi.styles'
      }
    },
	sass: {
		options: {
			sourceMap: true,
			includePaths: ['<%=ƒ.bower%>']
			},
		files: {
			"<%=ƒ.sass.dist%>": "<%=ƒ.sass.temp%>"
			}
		},
	postcss: {
		options: {
			map: true,
			processors: [
				require('autoprefixer')({browsers: '>0%'}),
				require('cssnano')()
				]
			},
		files: {
			'<%=ƒ.sass.mini%>': '<%=ƒ.sass.dist%>'
			}
		},
	clean: [
		'<%=ƒ.dist%>/*.css{,.map}',
		'<%=ƒ.bundl%>/*.css{,.map}'
		],
	copy:  {
		expand: true,
		cwd: '<%=ƒ.dist%>',
		dest: '<%=ƒ.bundl%>/',
		src: ['**/*.css{,.map}']
		},
	};
module.exports= tasks;