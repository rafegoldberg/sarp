<?#=KIRBY CONFIG 
	 #-details-> getkirby.com/docs/advanced/options

	#-license 
		c::set('license','put your license key here');
	#-panel   
		c::set('panel.install',true);
	#-routes  
		c::set('routes',[
			[ pattern=>'api/site',
				action=>  function(){
					$site= site();
					$data= $site->content();
					return response::json($data->toArray());
					}],
			[ pattern=> ['api/(:all)','(:all)'],
				action=>  function(){
					$path= join(func_get_args());
					$page= page($path);
					$page= page($path) ? $page : page('error');
					$data= [
						path=>  $path,
						page=>  array_merge($page->toArray(),[khtm=>kirby::render($page)]),
						pages=> site()->pages()
						];

					if( kirby::request()->ajax() )
						return response::json($data['page']);
					else 
						return array($path,[]);
					}],
			]);