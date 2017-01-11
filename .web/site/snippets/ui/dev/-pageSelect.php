<app-dev>
	<form class="getPage">
		<select name="getPage" class="getPage=page">
		<?$prj= $pages->find('projects')->children()->visible();
			$pgs= $pages->visible()->merge($prj);
			foreach( $pgs as $pg ):
			?>
			<option value="./api/<?=$pg->id()?>"><?=$pg->id()?></option>
			<?endforeach#pages?>
		</select>
	</form>
	<script>
		addLoadEvent(n=>{
			$('form.getPage').change(function(){
				var
				api= $(this).children('.getPage\\=page').val();
				$('select.getPage\\=page').val(api);
				$('ui-page').get(0).render(api);
				})
			})
	</script>
</app-dev>