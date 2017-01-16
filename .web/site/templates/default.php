<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<h3><?=$page->title()->html()?></h3>
	<hr>
	<table><tbody>
		<?foreach( $page->children()->visible() as $pg ):
			?>
		<tr><td>
			<a is=ui-link href="<?=$pg->uri()?>"><?=$pg->title()->html()?></a>
		</td></tr>
		<?endforeach#pages?>
	</tbody></table>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>