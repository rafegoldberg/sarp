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
var Bar= require("hbsfy/runtime");

//=Format JS 
// formatjs.io
// 
  // var helpers= require('handlebars-intl/dist/handlebars-intl.min.js').HandlebarsIntl;
  // helpers.registerWith(Bar);

//=TemplateHelpers
// github@assemble/handlebars-helpers
// 
  var helpers= window.hlprDebug =require('handlebars-helpers')();
  Bar.registerHelper(helpers);

  Bar.registerHelper( 'moment', require('helper-moment') );


//=Numeric Comparison Operators
// gist@tracend/7522125
// 
  /*
  Bar.registerHelper({
    ge: function(a,b){
      // 
      // greater than or equal to
      // 
      var next= arguments[arguments.length-1];
      return (a >= b) ? next.fn(this) : next.inverse(this);
      },
    gt: function(a,b){
      // 
      // greater than
      // 
      var next= arguments[arguments.length-1];
      return (a > b) ? next.fn(this) : next.inverse(this);
      },
    le: function(a,b){
      // 
      // less than or equal to
      // 
      var next= arguments[arguments.length-1];
      return (a <= b) ? next.fn(this) : next.inverse(this);
      },
    lt: function(a,b){
      // 
      // less than
      // 
      var next= arguments[arguments.length-1];
      return (a < b) ? next.fn(this) : next.inverse(this);
      },
    ne: function(a,b){
      // 
      // not equal
      // 
      var next= arguments[arguments.length-1];
      return (a !== b) ? next.fn(this) : next.inverse(this);
      },
    });
   */