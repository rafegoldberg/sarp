//=REQ'D
// 
  var Ck= require('chalk');

/*=QUICK
 */ 

/*=TASKS
 */ 
  var
  gitFiles= [
   '<%=ƒ.atoms%>/**/*',
   '!<%=ƒ.atoms%>/README.md',
   ],
  gitTasks= {
  //=cach-> 
    gitclean: {
      options: {
        onlyignorefiles:true
        }
      },
  //=push-> 
    gitadd: {
      files: {
        src:gitFiles
        }
      },
    gitcommit: {
      options: {
        message:'[G] AUTO-PUSH',
        verbose:true
        },
      files: {
        src:gitFiles
        },
      },
    gitpush: {
      options: {
        branch: '<%=usr.git.branch%>',
        verbose:true
        }
      },
  //=pull-> 
    gitfetch: {
      options: {
        all:true,
        verbose:true
        }
      },
    gitmerge: {
      options: {
        branch: 'origin/<%=usr.git.branch%>',
        commit:true,
        message: '[G] AUTO-PULL',
        verbose:true
        }
      },
  //=hooks->
    // githooks: {
    //   'pre-push': 'ftp-deploy:env.ftp', //=or via task in G.aliases
    //   },
  //=input->
    prompt: {
      options:{
      questions:[{
        config: 'gitcommit.env\\.git.options.message',
        type: 'input',
        message: 'Briefly describe changes:',
        validate: function(val){
          var chex= ( typeof(val)==='string' && val!=='' && val.split('/').length>=3 || val.length>=8 );
          if( !chex )
            console.log('\n',Ck.red(Ck.bold('whooaa!'),Ck.dim('maybe something a bit more descriptive?')));
          return chex;
          },
        filter: function(val){
          return '[G] '+val||'AUTO-GENERATED COMMIT';
          }
        }]
        }
      },//prompt
  };

module.exports = function(){
  return gitTasks;
  }