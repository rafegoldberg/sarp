<?/*-NEW->
	 */
	class Ui {

		/*=PROPERTIES
		 */
			private static $opts= array(
				ajaxBase=> './ajax/',
				iconBase=> 'icons',
				localUrl=> array(
					uiBase=> 'http://localhost:9000/lib/dsUi',
					reload=> 'http://localhost:35729',
					)
				);
			private static $called_once= array();
			private static $param= 'dsui';

		/*=INSTANTIATE
		 */
			static function ini( $user=array() ){
				//=toggle env local/remote
				// if( !self::checkset_session() ){
				//  reset self::$opts defaults, or stuff
				// 	}
				//=merge default, user opts
				self::$opts= array_merge(self::$opts,$user);
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
			static function uiJs(){
				self::uiScript();
				self::uiReload();
				}

		/*=UTILITIES
		 */
			static function envurl($path){
				$base= self::$opts['localUrl']['uiBase'];
				return "$base/$path";
				}
			static function dattr( $data ){
				return htmlentities( json_encode($data), ENT_QUOTES, 'UTF-8' );
				}
			static function att($data){
				#^alias of dattr() 
				return htmlentities( json_encode($data), ENT_QUOTES, 'UTF-8' );
				}

		/*=PRIVUTIL
		 */

			/*@todo: remove jQ dep
			private static function checkset_session(){
				$key= self::$param;
				//=check+filter request[key]
				$req= isset($_REQUEST[$key])
					&& $_REQUEST[$key]==""
					|| filter_var($_REQUEST[$key],FILTER_VALIDATE_BOOLEAN);
				//=if session[key] unset, use cookie val
				$_SESSION[$key]= isset($_SESSION[$key])
					? $_SESSION[$key]
					: filter_var($_COOKIE[$key],FILTER_VALIDATE_BOOLEAN);
				//=request val overrides session default
				$_SESSION[$key]= (!isset($_REQUEST[$key]) && $_SESSION[$key])
					? $_SESSION[$key]
					: $req;
				//=set cookie via JS
				// @todo[this is super hacky]
				?><script id=ui@cookie>
				// doing this in JS cause the PHP
				// setcookie() is being super fucked
				(function(url){ $.getScript(url,function(){
					Cookies.set(
						<?=json_encode($key)?>,
						<?=json_encode($_SESSION[$key])?>,
						{expires:1}
						);
				});})('https://rawgit.com/js-cookie/js-cookie/master/src/js.cookie.js');
				</script><?
				//=take it back now yo
				return $_SESSION[$key];
				}
			 */

			private static function wasrun( $fn ){
				if( in_array( $fn, self::$called_once ) )
					return true;
				else{
					array_push( self::$called_once, $fn );
					return false;
					}
				}

		/*=DEPENDENCIES
		 */
			/*=OG-GENERIC->
			 */
				private static function  uiStyle(){
					if( !self::wasrun(__FUNCTION__) ):
						$url= self::envurl('ui.min.css');
						?>
						<link id="ui@style" rel="stylesheet" href="<?=$url?>">
						<?endif;
					}
				private static function  uiIcons(){
					if( !self::wasrun(__FUNCTION__) ):
						$url= self::envurl(self::$opts['iconBase'].'/grunticon.loader.js');
						?>
						<script id="ui@icons" src="<?=$url?>"></script>
						<?endif;
					}
				private static function uiScript(){
					if( !self::wasrun(__FUNCTION__) ):
						$url= self::envurl('ui.'.'min.'.'js');
						?>
						<script id="ui@script" src="<?=$url?>"></script>
						<?endif;
					}
				private static function uiReload(){
					if( !self::wasrun(__FUNCTION__) && self::$opts[localUrl][reload] ):
						$url= self::$opts['localUrl']['reload'].'/livereload.js';
						?>
						<script id="ui@reload" src="<?=$url?>"></script>
						<?endif;
					}
			/*=NEW-KIRBY-->
				private static function  uiStyle(){
					if( !self::wasrun(__FUNCTION__) ){
						$url= self::envurl('ui.min.css');
						echo css($url);
						}
					}
				private static function  uiIcons(){
					if( !self::wasrun(__FUNCTION__) ){
						$url= self::envurl(self::$opts['iconBase'].'/grunticon.loader.js');
						echo js($url);
						}
					}
				private static function uiScript(){
					if( !self::wasrun(__FUNCTION__) ){
						$url= self::envurl('ui.min.js');
						echo js($url);
						}
					}
				private static function uiReload(){
					if( !self::wasrun(__FUNCTION__) && self::$opts[localUrl][reload] ){
						$url= self::$opts['localUrl']['reload'].'/livereload.js';
						echo js($url);
						}
					}
			 */

			public  static function   uiInit(){
				if( !self::wasrun(__FUNCTION__) ):
					$base= self::$opts['iconBase'];
					$icns= array_map('self::envurl',array(
						"$base/icons.data.svg.css",
						"$base/icons.data.png.css",
						"$base/icons.fallback.css"
						));
					?>
					<script id="ui@init">
					UiApp.init(<?=json_encode(self::$opts)?>);
					grunticon(<?=json_encode($icns)?>,grunticon.svgLoadedCORSCallback);
					</script>
					<?endif;
				}

		}#Ui?>