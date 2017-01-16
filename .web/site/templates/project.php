<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<h3><?=$page->title()->html()?></h3>
	<hr>
	<section>
		<?foreach($page->images()->limit(50) as $img):
			?>
			<figure>
				<?=$img->thumb([width=>100,quality=>75])->html()?>
			</figure>
		<?endforeach#pages?>
	</section>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>