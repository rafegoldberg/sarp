<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page data-model="<?=Ui::att($page->toArray())?>">
	<?snippet('-detail')?>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>