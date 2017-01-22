<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<header is="ui-page-header">
		<h1 class="heading heading--1"><?=$page->title()?></h1>
	</header>
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