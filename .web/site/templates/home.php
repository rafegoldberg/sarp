<?#=UiApp:ini->
	snippet('app/ui.ini');
	?>
<ui-main>
	<ui-page></ui-page>
</ui-main>
<?#=UiApp:end->
	snippet('app/ui.end');
	echo js('assets/site.js');
	?>