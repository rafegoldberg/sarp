var
Exp= module.exports ={},
Emt= require('@emmetio/expand-abbreviation');

Exp.expand= Exp.exp =Emt.expand;
Exp.def= Emt.createOptions({//set defaults
	addons:{bem:{
		//@use[pass a blank bem object in expand() opts]
		element:'--',
		modifier:'_',
		shortElementPrefix:'-'//=[class prefix to trigger BEM]
		}},//addons.bem
	profile:{
		format:true,
		attributeCase:'lower',
		attributeQuotes:'single',
		compactBooleanAttributes:true,
		indent:'  ',
		inlineBreak:1,
		tagCase:'lower',
		}//profile
	});//set defaults

/*\---------------------||
\\\\ UTIL-> EMT (Emmet)
 \*/
//@doc[configure emmet expander](//docs.emmet.io/abbreviations/syntax)
// var
// Emmet= module.exports =require('@emmetio/expand-abbreviation');
// Emmet.createOptions({
// 	//@set[defaults]
// 	addons:{ bem:{
// 		//@use[pass a blank bem object in expand() opts]
// 		element:'E',
// 		modifier:'M',
// 		shortElementPrefix:'-'//=[class prefix to trigger BEM]
// 		}},//addons.bem
// 	profile:{
// 		format:true,
// 		attributeCase:'lower',
// 		attributeQuotes:'single',
// 		compactBooleanAttributes:true,
// 		indent:'  ',
// 		inlineBreak:1,
// 		tagCase:'lower',
// 		}//profile
// 	});
