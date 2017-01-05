
var
Url =module.exports= require('url');

Url.valid= require('is-url');
Url.isPath= function(str){
	return typeof(str)==='string' && str.indexOf('./')===0
		? true
		: false;
	}