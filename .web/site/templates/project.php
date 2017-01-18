<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<header>
		<h1><?=$page->title()->html()?></h1>
	</header>
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