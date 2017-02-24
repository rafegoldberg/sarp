window.Dom=require('x-tag');

var
Tag= function(def){
	if( this.constructor !== Tag )
		return new Tag(def);
	$.extend(true,this,def);
	return this;
	};//tag

module.exports= {
	new:Tag,
	register(name,Tag){
		if( 'prototype' in Tag )
			Tag.prototype= UiApp.modules[Tag.prototype].prototype;
		return Dom.register(name,Tag);
		}
	}