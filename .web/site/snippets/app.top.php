<?#=UiApp:ini
	snippet('app/ui.ini')
	?>
<app-main class="container">
	<app-menu>
		<h1><a
			is="ui-link" 
			class="heading heading--1"
			href="home">
			<?=$site->title()->html()?></a></h1>
		<?snippet('nav')?>
	</app-menu>