<?class Ui {
/*=PROPERTIES
 */
	private static $uiOpts= array(
		ajaxBase=> './ajax/',
		iconBase=> 'icons',
		minified=> array(
			js=> true,
			css=>true,
			),
		localUrl=> array(
			uiBase=> 'http://localhost:9000/lib/dsUi',
			reload=> 'http://localhost:35729',
			)
		);
/*=INSTANTIATE
 */
	static function ini( $user=array() ){
		//=merge default, user opts
		self::$uiOpts= array_merge(self::$uiOpts,$user);
		//=link main ui stylesheet
		self::uiCss();
		}
	static function end( $init=true ){
		self::uiJs();
		if( $init )
			self::uiInit();
		}

	static function uiCss(){
		//=log ui opts
		self::uiStyle();
		self::uiIcons();
		}
	static function  uiJs(){
		self::uiScript();
		self::uiReload();
		}
/*=UTILITIES
 */
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
			$url= self::link('ui.min.css');
			?>
			<link id="ui@style" rel="stylesheet" href="<?=$url?>">
			<?endif;
		}
	private static function  uiIcons(){
		if( !self::wasRun(__FUNCTION__) ):
			$url= self::link(self::$uiOpts['iconBase'].'/grunticon.loader.js');
			?>
			<script id="ui@icons" src="<?=$url?>"></script>
			<?endif;
		}
	private static function uiScript(){
		if( !self::wasRun(__FUNCTION__) ):
			$url= self::link('ui.'/*.'min.'*/.'js');
			?>
			<script id="ui@script" src="<?=$url?>"></script>
			<?endif;
		}
	private static function uiReload(){
		if( !self::wasRun(__FUNCTION__) && self::$uiOpts[localUrl][reload] ):
			$url= self::$uiOpts['localUrl']['reload'].'/livereload.js';
			?>
			<script id="ui@reload" src="<?=$url?>"></script>
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
			<script id="ui@init">
			UiApp.init(<?=json_encode(self::$uiOpts)?>);
			grunticon(<?=json_encode($icns)?>,grunticon.svgLoadedCORSCallback);
			</script>
			<?endif;
		}
}#class:ui?>