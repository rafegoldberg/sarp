/*=
Handlebars
 Environment
 |
 @note: 
   register Handlebars partials and
   other assorted helpers here.
 @requires hbsfy/runtime 
   to work, the runtime script must
   be exported as a global variable,
   currently happening in core.js
 |
 */
var
Bar= module.exports =require("hbsfy/runtime");

//=Assemble Helpers
// github@assemble/handlebars-helpers
// 
  var helpers=window.helpers= require('handlebars-helpers')();
  Bar.registerHelper(helpers);
  //Bar.registerHelper( 'moment', require('helper-moment') );

//=Ui Custom Helpers
// 
  Bar.registerHelper({
    ifel: function(test,ifval,elval=''){
      if( arguments.length<2 )
        console.warn('{{ifel}} requires at least two paramaters')
      return test ? ifval : elval;
      },
    });