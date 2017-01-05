// var bundle= 'lib/dsUi/';

module.exports = function( grunt, options ){
	return {
		php:   {
			options: {
				hostname: '0.0.0.0',
				port: 8000,
				base: '<%=ƒ.serv%>',
				keepalive: grunt.option('persist'),
				open: grunt.option('open')
				}
			},
		// copy:  {
		// 	expand: true,
		// 	cwd: '<%=ƒ.dist%>',
		// 	dest: '<%=ƒ.bundl%>/',
		// 	src: ['**/*']
		// 	},
		// clean: {
		// 	src: [
		// 		'<%=ƒ.bundl%>/*',
		// 		]
		// 	}
		}
	}