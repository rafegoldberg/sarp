<?class ProjectsPage extends Page {

  public function gallery(){
  	//thumb overides
	  	thumb::$defaults[blur]=25;
	  //prj cover imgs
  	$data= $this//filters->
	  	->children()
		  ->visible()
		  ->filterBy('cover','!=','')
		  ->map(function($prj){//cover.thumb->
			  if( $prj->hasImages() && $prj->cover() ){
				  $img= $prj->cover()->toFile();
				  $img= thumb($img, array(
						quality=>     50,
						width=>      300,
						height=>     300,
						crop=>      true,
						blur=>     false,
						grayscale=>false,
						));//thum
				  }
			  else $img= false;
			  return $img->toArray();
			  });
  	//reset thum opt
	  	thumb::$defaults[blur]=10;
		return $data;
	  }//->gallery

	}//ProjectsPage