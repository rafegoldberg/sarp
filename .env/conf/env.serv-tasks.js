var php= {
	options:{
		hostname: '0.0.0.0',
		port: 8000,
		base: '<%=ƒ.serv%>',
		open: false,//--open
		silent: true,//--silent
		keepalive: false
		}
	};
module.exports = function( grunt, options ){
	if( grunt.option('open') )
		php.options.open= true;
	if( grunt.option('not-silent') )
		php.options.silent= false;
	return {php:php};
	}