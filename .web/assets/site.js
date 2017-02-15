$(document).ready(function(){

	var DB= {//[underscore object]
		projects:ø([
			{ slug:'match',
				title:'Match',
				text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi quo natus corporis exercitationem sapiente nobis commodi tenetur illo, corrupti a officia iste, rem velit perspiciatis officiis distinctio provident, itaque?'
				},
			{ slug:'masallah',
				title:'Masallah',
				text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi quo natus corporis exercitationem sapiente nobis commodi tenetur illo, corrupti a officia iste, rem velit perspiciatis officiis distinctio provident, itaque?'
				},
			{ slug:'substitutes',
				title:'Substitutes for my Father',
				text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi quo natus corporis exercitationem sapiente nobis commodi tenetur illo, corrupti a officia iste, rem velit perspiciatis officiis distinctio provident, itaque?'
				}
			]),//projects
		};

	$.mockjax({//@match[projects.slug]
		url: /^\/project\/([\w-]+)$/,
		urlParams: ['project'],
		response(opt){
		  var
		  project= DB.projects.where({slug:opt.urlParams.project});
		  if( !project.length ){
		  	console.warn('no projects found');
		  	return (this.responseText=[]);
			  }
		  return (this.responseText=project);
		  }
		});

	});///ready