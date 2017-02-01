<?#=UiApp:ini
	snippet('app/ui.ini')
	?>
<app-main class="container">
	<app-menu>
		<h1><a
			is="ui-link" 
			class="[ app-title ][ heading heading_thin heading_1 ]"
			href="home">
			<?=$site->title()->html()?></a></h1>
		<?snippet('nav')?>
	</app-menu>
	<app-page><!--closed in app.btm -->