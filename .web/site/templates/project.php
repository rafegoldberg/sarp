<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<h3><?=$page->title()->html()?></h3>
	<hr>
	<section>
		<?foreach($page->images() as $img):
			?>
			<figure is=ui-figure data-model="<?=Ui::att($img->toArray())?>"></figure>
		<?endforeach#pages?>
	</section>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>