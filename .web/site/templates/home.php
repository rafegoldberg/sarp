<?#=UiApp:ini->
	snippet('app/ui.ini');
	?>
	
<app-main>
	<ui-portfolio></ui-portfolio>
	<ui-gallery></ui-gallery>
</app-main>

<?#=UiApp:end->
	snippet('app/ui.end');
	echo js('assets/site.js');
	?>