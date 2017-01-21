<?#=UiApp:top->
	snippet('app.top');
	?>
<ui-page>
	
	<ol>
	<?foreach( $page->children()->visible() as $pg ):
		?>
		<li>
			<a is=ui-link href="<?=$pg->uri()?>"><?=$pg->title()->html()?></a>
		</li>
	<?endforeach#pages?></ol>

</ui-page>
<?#=UiApp:btm->
	snippet('app.btm');
	?>