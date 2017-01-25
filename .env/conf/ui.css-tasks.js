var
tasks={
	sass_globbing:{
		files: {
			'<%=ƒ.sass.temp%>':[
				'<%=ƒ.sass.main%>',
				'<%=ƒ.sass.core%>/{,0-}config/*.scss',
				'<%=ƒ.sass.core%>/{,1-}base/*.scss',
				'<%=ƒ.sass.core%>/{,2-}generic/*.scss',
				'<%=ƒ.sass.core%>/{,3-}layout/*.scss',
				'<%=ƒ.sass.core%>/{,4-}extras/*.scss',
				'<%=ƒ.sass.atom%>',
				'<%=ƒ.sass.core%>/{,5-}extend/*.scss',
				],
			/*\
			 @refactor[individual glob exports]
			 @fix[sourcemaps]
			 |->
				'UI.CORE.CONF.scss':[
					'<%=ƒ.sass.main%>',
					'<%=ƒ.sass.core%>/config/*.scss',
					],
				'UI.CORE.XTRA.scss':[
					'<%=ƒ.sass.core%>/{base,generic,layout}/*.scss',
					'<%=ƒ.sass.core%>/extends/*.scss',
					],
				'UI.CORE.scss':[
					'UI.CORE.CONF.scss',
					'UI.CORE.XTRA.scss',
					],
				'UI.ATOM.scss':[
					'<%=ƒ.sass.atom%>'],
				'<%=ƒ.sass.temp%>':[//'UI.GLOB.scss':[
					'UI.CORE.scss',
					'UI.ATOM.scss'
					],
			\*/
			},
		options: {
			useSingleQuotes: true,
			signature: '//=Ui Sass Glob'
			}
		},
	sass:{
		options: {
			sourceMap: true,
			includePaths: ['<%=ƒ.bower%>',]
			},
		files: {
			"<%=ƒ.sass.dist%>":"<%=ƒ.sass.temp%>",
			"UI.COMP.css":"UI.GLOB.scss"
			}
		},
	postcss:{
		options: {
			map: true,
			processors: [
				require('autoprefixer')({
					browsers:'>0%',
					}),
				require('cssnano')({
					colormin:false,//dont convert colors
					zindex:false//dont normalize z indicies
					})
				]
			},
		files: {
			'<%=ƒ.sass.mini%>':'<%=ƒ.sass.dist%>'
			}
		},
	clean:[
		'<%=ƒ.dist%>/*.css{,.map}',
		'<%=ƒ.bundl%>/*.css{,.map}'
		],
	copy:{
		expand: true,
		cwd: '<%=ƒ.dist%>',
		dest: '<%=ƒ.bundl%>/',
		src: ['**/*.css{,.map}']
		},
	};
module.exports= tasks;