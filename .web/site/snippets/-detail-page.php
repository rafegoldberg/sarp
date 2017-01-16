<?$rows=[
		Title=>    $page->title(),
		URI=>      $page->uri(),
		Parent=>   $page->parent(),
		Template=> $page->intendedTemplate(),
		Slug=>     $page->slug(),
		];
	$rows= array_filter($rows,function($v){
		return is_string($v);# $v?true:false;
		})?>
<table class="table table-bordered"><tbody>
	<tr style="background:#FAFAFA"><th class=text-right colspan=2>Page Detail</th></tr>
	<?foreach($rows as $label=>$code):
		?>
		<tr>
			<th><?=$label?></th>
			<td><code><?=$code?></code></td>
		</tr>
		<?endforeach#$rows?>
</tbody></table>