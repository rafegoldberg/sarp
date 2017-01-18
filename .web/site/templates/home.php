<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<article>
		<header>
			<h3><?=$page->title()->html()?></h3>
		</header>
		<section><?=$page->text()->kt()?></section>
	</article>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>