<?#ctrl:home
	return function( $site, $pages, $page, $args ){
  /*=this controller returns extra data as an
   | assoc array whose entries are extracted
   | to the global scope of the PHP template
	 |
	 @learnmore: getkirby.com/docs/developer-guide/advanced/controllers
	 |
	\*/
  return compact('route','args');
	}#ctrl:home?>