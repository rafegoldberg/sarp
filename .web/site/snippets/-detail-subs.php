	<table class="table table-bordered"><tbody>
		<tr style="background:#FAFAFA"><th class=text-right colspan=2>Subpages</th></tr>
	<?$pgs= $page->children()->visible();
		$pgs= r(count($pgs->toArray()),$pgs,$pages);
		foreach( $pgs as $pg ):
		?>
		<tr><td>
			<a is="ui-link"
				title="<?=$pg->title()->html()?>"
				href="<?=$pg->id()?>"><?=$pg->title()->html()?></a>
		</td></tr>
		<?endforeach#page->children?>
	</tbody></table>