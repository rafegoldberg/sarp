<?#=UiApp:ini->
	snippet('app/ui.ini');
	?>
	
<app-wrap>
	<app-main>
		<ui-portfolio></ui-portfolio>
		<ui-gallery></ui-gallery>
	</app-main>
	<app-nav></app-nav>
</app-wrap>

<?#=UiApp:end->
	snippet('app/ui.end');
	echo js('assets/site.js');
	?>