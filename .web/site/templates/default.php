<?#app:top->
	snippet('uiApp/.run');
	snippet('uiApp/head')
	?>

<ui-page data-model="./api/projects/masallah">
	<em>loading...</em>
</ui-page>

<?snippet('uiApp/-misc.js')?>
<script>
	addLoadEvent(function(){
		function Model(obj){
			return typeof(obj)=='object'
				&& Object.assign(this,obj)
				|| null;
			}
		var
		cbk= function(e,m){
			var
			Mdl= new Model(m)||null,
			Evt= {t:e.type,
				    n:e.namespace},
			Css= ['color:#F8634B;font-weight:bold',
			      'color:#7F7F7F;font-weight:normal;font-style:italic'];
			console.log(`%c%s%c.%s(%o,%O)`,Css[0],Evt.n,Css[1],Evt.t,Mdl||null,this);
			};
		$('ui-page').on('rendered.ui', cbk);
		$('ui-page').on('rendering.ui',cbk);
		$('ui-page').on('loaded.ui',   cbk);
		$('ui-page').on('loading.ui',  cbk);
		});
</script>

<?#app:btm->
	snippet('uiApp/foot');
	snippet('uiApp/.end')?>