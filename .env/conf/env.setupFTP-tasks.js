/*=FN UTILS
 */ 
  function prettyJSON(obj,logFmt=false){
    var jStr= JSON.stringify(obj,null,2);
    if( logFmt )
      jStr= jStr.replace(/\"/g,'');
    return jStr;
    };
  function sepLog(ttx=false,right=false){
    var 
    Chk= require('chalk'),
    log= '',
    sep= '--------------------------------------------------';

    if( ttx && typeof(ttx)=='string' ){
      var 
      sln= sep.length-(Chk.stripColor(ttx).length),
      sep= Array.from(sep).slice(0,sln).join('');
      if( !right ) log= ttx+sep;
      else         log= sep+ttx;
      }
    return log||sep;
    }

module.exports= function(grunt,options){

    var DEBUG= false;

    var//=build prompt
      key= 'ftp',
      obj= options.usr[key],
      qst= Object.keys(obj).map(n=>{
        var q=
        { message: `${n}:`,
          type: n.indexOf('pass')>=0 ? 'password' : 'input',
          config: `usr.${key}.${n}`,
          default: `${obj[n]}`
          };
        if( ['auth'].indexOf(n) )
          return q;
        else
          return false;
        }).filter(n=>n);

    var//=write json
      ƒck= function(answers,fin){


        var
        Chk= require('chalk'),
        src= '.env/data/user.json';

        if( !grunt.file.exists(src) )
          grunt.file.copy('.env/data/.user.json',src);
        
        var jsn= grunt.file.readJSON(src);

        if( DEBUG || grunt.option('debug') ){
          grunt.log.writeln('');
          grunt.log.writeln(Chk.yellow(sepLog(Chk.bold(`{ usr.${key} }`))));
          grunt.log.writeln(Chk.red.dim( prettyJSON(jsn[key],1) ));
          grunt.log.writeln(Chk.black.dim(sepLog()));
          }

        //=UPDATE + WRITE
        //
        jsn[key]= grunt.config(`usr.${key}`);
        grunt.file.write(src,prettyJSON(jsn));

        if( DEBUG || grunt.option('debug') ){
          grunt.log.writeln( Chk.green( prettyJSON(jsn[key],1) ));
          grunt.log.write(Chk.yellow(sepLog('JSON updated',1)+'!'));
          grunt.log.writeln('');
          }
        else
          grunt.log.writeln(Chk.yellow(sepLog(Chk.bold(`{usr.${key}}`)+' updated')));
        };

    return {
      prompt:{
        options:{
          questions: qst,
          then: ƒck
          },
        },//prompt
      };
    };