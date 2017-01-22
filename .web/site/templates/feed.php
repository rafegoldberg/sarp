<?#=UiApp:top->
	snippet('app.top');
	?>
<ui-page>
	<ol class="numericList">
	<?foreach( $page->children()->visible() as $pg ):
		?>
		<li><a
			is=ui-link
			class=numericList
			href="<?=$pg->uri()?>"><?=$pg->title()->html()?>
			</a></li>
	<?endforeach#pages?>
	</ol>
</ui-page>
<?#=UiApp:btm->
	snippet('app.btm');
	?>