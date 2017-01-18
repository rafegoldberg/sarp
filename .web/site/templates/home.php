<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<article>
		<header>
			<h1 class="[ heading heading--2 ]"><?=$page->title()->html()?></h1>
		</header>
		<section><?=$page->text()->kt()?></section>
	</article>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>