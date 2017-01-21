<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<header is="ui-pull">
		<h1 class="[ heading heading--2 ]"><?=$page->title()->html()?></h1>
	</header>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>