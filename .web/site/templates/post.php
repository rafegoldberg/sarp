<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<header>
		<h3><?=$page->title()->html()?></h3>
	</header>
	<hr>
	<section><?=$page->text()->kt()?></section>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>