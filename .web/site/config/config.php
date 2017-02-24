<?
//=KIRBY CONFIG 
	#->getkirby.com/docs/advanced/options

#-license 
c::set('license','put your license key here');
#-panel   
c::set('panel.install',true);
#-routes 
c::set('routes',[
	[ pattern=>'api',
		action=>  function(){
			$site= site();
			$data= $site->content();
			$data= [ mdl=> $data->toArray() ];
			return response::json($data);
			}],
	[ pattern=>'api/ui/coverImg/(:any)',
		action=>function($parent_page){
			page($parent_page)
				->children()
				->visible()
				->filterBy('cover','!=','')
				->map(function($pg){
					if( $pg->hasImages() )
						$fi= $pg->cover()->toFile()->toArray();
					else $fi= false;
					return $fi;
					});
			return response::json($data->toArray());
			}],
	[ pattern=>['api/(:all)','(:all)'],
		action=>function(){
			//=get path 
			 $path= join(func_get_args());
			//=get page 
			 $page= page($path);
			 $page= page($path) ? $page : page('error');
			//=DEVTESTS
				//=visit page 
			if( kirby::request()->ajax() ){
				 site()->visit($page,'en');
				//=render tpl 
				 $khtm= kirby::render($page);
				//=sub-pages  
				 $subs= $page->children()->visible()->toArray();
				//=nav pages  
				 $knav= site()->pages()->visible()->map(function($p){
					 return $p->toArray();
					 });
				//=build json 
				 $respond= [
					 ttl=> $page->title()->value(),
					 url=> $page->url(),
					 uri=> '/'.$page->uri(),
					 htm=> $khtm,
					 nav=> $knav->data,
					 sub=> $subs,
					 mdl=> $page->toArray(),//array_merge($page->toArray(),[])
					 ];
				#-------------#
				return response::json($respond);
				}#=ajax
			else {
				return array($path,array(api=>'test'));
				// go($page);
				}#!ajax
			}],
	]);