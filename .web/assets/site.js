$(document).ready(function(){

	var DB= {//[underscore object]
		projects:[
			{ id:'match',
				title:'Match',
				text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi quo natus corporis exercitationem sapiente nobis commodi tenetur illo, corrupti a officia iste, rem velit perspiciatis officiis distinctio provident, itaque?'
				},
			{ id:'masallah',
				title:'Masallah',
				text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi quo natus corporis exercitationem sapiente nobis commodi tenetur illo, corrupti a officia iste, rem velit perspiciatis officiis distinctio provident, itaque?'
				},
			{ id:'substitutes',
				title:'Substitutes for my Father',
				text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi quo natus corporis exercitationem sapiente nobis commodi tenetur illo, corrupti a officia iste, rem velit perspiciatis officiis distinctio provident, itaque?'
				}
			],//projects
		};

	$.mockjax({//@match[projects.id]
		url: /^\/projects(\/[\w-]+)?$/,
		urlParams: ['project'],
		response(opt){
		  var
		  project= Uc(DB.projects).where({id:opt.urlParams.project});
		  if( !project.length ){
		  	console.warn('no projects found; returning full collection');
		  	return (this.responseText=DB.projects);
			  }
		  return (this.responseText=project);
		  }
		});

	});///ready