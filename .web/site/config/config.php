<?#=KIRBY CONFIG 
	 #-details-> getkirby.com/docs/advanced/options

	#-license 
		c::set('license','put your license key here');
	#-panel   
		c::set('panel.install',true);
	#-routes  
		//=quick functions
		c::set('routes',[
			[ pattern=>'api/site',
				action=>  function(){
					$site= site();
					$data= $site->content();
					return response::json($data->toArray());
					}],
			[ pattern=> 'api/(:all)',
				action=>  function(){
					$path= join(func_get_args());

					$page= page($path);
					$page= page ? $page : page('error');


					if( kirby::request()->ajax() ){

						site()->visit($page,'en');
						$khtm= kirby::render($page);

						return response::json([
							mdl=> array_merge($page->toArray(),[khtm=>$khtm]),
							ttl=> $page->title()->value(),
							url=> $page->url(),
							uri=> '/'.$page->uri(),
							nav=> site()->pages()->toArray()
							]);
						}//ajax
					else 
						return array($path,[]);
					}],
			]);