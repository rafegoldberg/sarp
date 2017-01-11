var
tasks= {
  default: ['env.start'],
  /*=
  Ui Env
   */
    'env.setup': [
      'notify:credentials',
      'prompt:env.setupGit',
      'prompt:env.setupFTP',
      ],
    'env.start': [
      'notify:start',
      'php:env.serv',
      'watch',
      ],
    'env.update': [
      'gitfetch:env.git',
      'gitmerge:env.git',
      'updateRag'
      ],
    'env.deploy': [
      // 'prompt:env.git',
      // 'gitadd:env.git',
      // 'gitcommit:env.git',
      // 'gitpush:env.git',
      'ftp-deploy:env.ftp',
      ],
    'env.push': [
      'env.ftp',
      ],
  /*=
  Ui Build
   */
    'ui.css': [
      'sass_globbing:ui.css',
      'sass:ui.css',
      'postcss:ui.css',
      ],
    'ui.js': [
      'browserify:ui.js',
      'uglify:ui.js',
      ],
    'ui.icn': [
      'clean:ui.icn',
      'grunticon:ui.icn',
      ],
    'ui.build': [
      'clean:temp',
      'ui.css',
      'ui.js',
      'ui.icn',
      ],
  };

module.exports= function( grunt, options ){

  var Ck= require('chalk');

  /*rebuild ui on env.start
   */
  if( grunt.option('rebuild') ){
    console.log(Ck.bold.green('rebuilding...'))
    tasks['env.start'].unshift('ui.build');
    }

  /*dont minify js build
   */
  if( grunt.option('no-min') )
    tasks['ui.js'].pop();

  /*dont clean before builds
   */
  if( !grunt.option('no-clean') )
    tasks['ui.css'].unshift('clean:ui.css') &&
    tasks['ui.js'].unshift('clean:ui.js');

  /*no web/ builds generated
   */
  if( !grunt.option('no-web') )
    tasks['ui.css'].push('copy:ui.css') &&
    tasks['ui.js' ].push('copy:ui.js' ) &&
    tasks['ui.icn'].push('copy:ui.icn');

  return tasks;
  }//=end->aliases.js