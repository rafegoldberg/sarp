<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
 	<section>
		<?foreach($page->images() as $img):
			?>
			<figure is=ui-figimg
			 data-model="<?=Ui::att($img->toArray())?>"></figure>
		<?endforeach#pages?>
	</section>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>