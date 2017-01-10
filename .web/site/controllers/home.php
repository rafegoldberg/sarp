<?return function( $site, $pages, $page ){
  /*=this controller returns extra data as an
   | assoc array which is extracted to the
   | global scope of the PHP template
	 |
	 @learnmore: getkirby.com/docs/developer-guide/advanced/controllers
	 |
	\*/
  $list= [a=>1,b=>2];
  return compact('list');
	};