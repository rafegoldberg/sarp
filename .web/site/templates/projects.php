<?#=UiApp:top->
	snippet('app.top');
	?>
<ui-page>

	<ui-project-gallery
		data-model="<?=Ui::att($page->gallery())?>">
		</ui-project-gallery>
	<script>
		console.log(<?=json_encode(thumb::$defaults[quality])?>)
	</script>

</ui-page>
<?#=UiApp:btm->
	snippet('app.btm');
	?>