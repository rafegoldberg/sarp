<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<header>
		<h1><?=$page->title()->html()?></h1>
	</header>
	<section><?=$page->text()->kt()?></section>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>