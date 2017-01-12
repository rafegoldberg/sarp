<app-dev>
	<form class="getPage">
		<select name="getPage" class="getPage=page">
			<option disabled selected>projects</option>
		<?$pgs= $pages->find('projects')->children()->visible();
			foreach( $pgs as $pg ):
			?>
			<option value="./api/<?=$pg->id()?>"><?=$pg->id()?></option>
			<?endforeach#pages?>
		</select>
	</form>
	<script>
		addLoadEvent(function(){
			$('form.getPage').change(function(){
				var
				api= $(this).children('.getPage\\=page').val();
				$('select.getPage\\=page').val(api);
				$('ui-page').get(0).render(api);
				})
			})
	</script>
</app-dev>