var Ck= require('chalk');

module.exports = function(grunt){
/*=
INIT
CONF
 */
  require('load-grunt-config')(grunt,{
    data: {
      ƒ: grunt.file.readJSON('.env/data/path.json'),
      usr: grunt.file.exists('.env/data/user.json')
        ? grunt.file.readJSON('.env/data/user.json')
        : grunt.file.readJSON('.env/data/.user.json')
      },
    configPath: require('path').join(process.cwd(),'.env/conf'),
    init: true,
    loadGruntTasks: true
    });
/*=
CUSTOM
TASKS
 */
  grunt.registerTask('updateRag', 'suggest updating in cli', function( K=null ){

    var
    Tbl= require('cli-table'),
    table= new Tbl();
    table.push(
      { 'bower install -S': 'update ui.ds dependancies (Bower)'         },
      { 'sudo npm install': 'update ui.env dependancies (Grunt + Node)' }
      );

    grunt.log.writeln('');
    grunt.log.writeln(Ck.bold.blue(' yo fool!'),Ck.yellow('remember 2 always keep ur dependencies up to date!','🙌'));
    grunt.log.writeln(Ck.blue.dim(' pop a new tab and run these tasks:'));
    console.log(table.toString());
    });
/*=
DEBUG
TASKS
 */
  grunt.registerTask('log', 'pass key to log a conf entry, else all', function( K=null ){

    if( !K ) 
      return grunt.log.writeln() && grunt.log.writeln(Ck.red.bold('SEARCH TERM REQUIRED'));

    var
    def= {//=aliases->
      pkg:'package',
      paths:'ƒ',
      tasks:'aliases',
      },
    key= def[K] || K;
    Object.keys(def).forEach(function(alias){
      key= key.replace(alias,def[alias]);
      });

    var
    log= grunt.config.get(key||null);

    grunt.log.writeln();
    key= !key || key.replace('\\','');
    grunt.log.writeln( Ck.yellow('[['+Ck.bold('G')+'.config]]->') + Ck.blue.bold(key||'') );

    var res= JSON.stringify(log,null,2);
    if( typeof(res)==='undefined' ){
      grunt.log.write(Ck.dim(Ck.red('no match for'),Ck.bold.blue(key),Ck.red('in config')));
      }
    else grunt.log.write(res);

    grunt.log.writeln();
    });
}