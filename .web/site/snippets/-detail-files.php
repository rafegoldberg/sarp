<?if( $page->hasImages() ):?>

	<small>
		<table class="table table-bordered text-center"><tbody>
			<tr style="background:#FAFAFA"><th class=text-right colspan=2>Files</th></tr>
			<?foreach($page->images()->limit(10) as $img):
				?>
				<tr>
					<th><?=$img->name()?></th>
					<td><?=$img->thumb([
						 width=>100, 
						 quality=>75
						])->html()?></td>
				</tr>
			<?endforeach#$files?>
		</tbody></table>
	</small>

<?endif#$files?>