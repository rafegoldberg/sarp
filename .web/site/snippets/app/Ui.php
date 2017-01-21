<?class Ui {
/*=PROPERTIES
 */
	private static $uiOpts= array(
		ajaxBase=> './ajax/',
		iconBase=> 'icons',
		minified=> array(
			js=>  true,
			css=> true,
			),
		localUrl=> array(
			uiBase=> 'http://localhost:9000/lib/dsUi',
			reload=> 'http://localhost:35729',
			)
		);
/*=INSTANTIATE
 */
	static function ini($user=[]){
		/*=OPTIONS
		 */
		//=merge defaults+usr args
			self::$uiOpts= array_merge(self::$uiOpts,$user);
		//=checkset url parameters
			self::$uiOpts[minified][css]= self::onoff('mini-css',self::$uiOpts[minified][css]);
			?><script>console.log('?opts->',<?=json_encode(self::$uiOpts[minified])?>)</script><?
		//=link main ui stylesheet
		self::uiCss();
		}
	static function end(){
		self::uiJs();
		}

	static function uiCss(){
		//=log ui opts
		self::uiStyle();
		self::uiIcons();
		}
	static function  uiJs(){
		self::uiScript();
		self::uiInit();
		self::uiReload();
		}
/*=UTILITIES
 */
	static function onoff($key,$alt=null){
		//=parse boolval from a url param
		// [on/off|true/false|yes/no|0/1]
		if( is_string($key) && isset($_REQUEST[$key]) )
			return filter_var($_REQUEST[$key],FILTER_VALIDATE_BOOLEAN);
		return $alt;
		}
	static function link($path){
		$base= self::$uiOpts['localUrl']['uiBase'];
		return "$base/$path";
		}
	static function dattr($data){
		return htmlentities( json_encode($data), ENT_QUOTES, 'UTF-8' );
		}
	static function   att($data){
		#^alias of dattr() 
		return htmlentities( json_encode($data), ENT_QUOTES, 'UTF-8' );
		}
/*=PRIVUTIL
 */
	private static $_fnRan= array();
	private static function wasRun($fn){
		if( in_array( $fn, self::$_fnRan ) )
			return true;
		else{
			array_push( self::$_fnRan, $fn );
			return false;
			}
		}
/*=DEPENDENCIES
 */
	private static function  uiStyle(){
		if( !self::wasRun(__FUNCTION__) ):
			// $url= self::link('ui.min.css');
			$f= ['ui','min','css'];
			if( !self::$uiOpts[minified][css] )
				unset($f[1]);
			$url= self::link(implode('.',$f));
			?>
			<link id="ui@stylesheet=css" rel="stylesheet" href="<?=$url?>">
			<script id="ui@addLoadEvent=js">
				var UiApp= {
					onload(fn){
					  var
					  oldonload= window.onload;
					  if( typeof(window.onload)!='function' )
					    window.onload= fn;
					  else
					  	window.onload= ()=>oldonload && oldonload() || fn();
						//^usage->
						//	UiApp.onload(ƒn=>{ log(hello) })
						}
					}
				</script>
			<?endif;
		}
	private static function  uiIcons(){
		if( !self::wasRun(__FUNCTION__) ):
			$url= self::link(self::$uiOpts['iconBase'].'/grunticon.loader.js');
			?>
			<script id="ui@icons=js" src="<?=$url?>"></script>
			<?endif;
		}
	private static function uiScript(){
		if( !self::wasRun(__FUNCTION__) ):
			$f= ['ui','min','js'];
			if( !self::$uiOpts[minified][js] )
				unset($f[1]);
			$url= self::link(implode('.',$f));
			?>
			<script id="ui@script=js" src="<?=$url?>"></script>
			<?endif;
		}
	private static function uiReload(){
		if( !self::wasRun(__FUNCTION__) && self::$uiOpts[localUrl][reload] ):
			$url= self::$uiOpts['localUrl']['reload'].'/livereload.js';
			?>
			<script>Log.log('uiReload()',<?=json_encode(self::$uiOpts[localUrl])?>);
				</script>
			<script id="ui@reload=js" src="<?=$url?>"></script>
			<?endif;
		}
	public  static function   uiInit(){
		if( !self::wasRun(__FUNCTION__) ):
			$base= self::$uiOpts['iconBase'];
			$icns= array_map('self::link',array(
				"$base/icons.data.svg.css",
				"$base/icons.data.png.css",
				"$base/icons.fallback.css"
				));
			?>
			<script id="ui@init=js">
			(function(){
				UiApp.init(<?=json_encode(self::$uiOpts)?>);
				grunticon(<?=json_encode($icns)?>,grunticon.svgLoadedCORSCallback);
				})()
			</script>
			<?endif;
		}
}#class:ui?>