var ø=require('underscore');

module.exports= {
	enquire:require('enquire'),
	list:{},
	defs:{
		//-custom->
		// 
			class(name=''){
				return Object.values({
					pre:'mq',
					sep:'__',
					mod: name,
					}).join('');
				},
		//-enquire->
		// 
			match(){
				$('html').addClass( this.class(this.name) );
				$(document).trigger(`mq.match.${this.name}`);
				},
			unmatch(){
				$('html').removeClass( this.class(this.name) );
				$(document).trigger(`mq.unmatch.${this.name}`);
				},
			setup(){},
			destroy(){},
			deferSetup:true
		},
	on( name, mqry, hndl={} ){
		if( arguments.length<2 )
			return console.log('pass a name and media query string');

		if( typeof(mqry)!=='string' )
			return console.warn('pass a media query string');

		if( typeof(name)!=='string' )
			return console.warn('pass a name for the query');

		var
		defs= Object.assign({name},this.defs);

		if( typeof(hndl)==='object' )
			this.enquire.register(mqry,[defs,hndl]);
		else
			this.enquire.register(mqry,defs);
		}
	}