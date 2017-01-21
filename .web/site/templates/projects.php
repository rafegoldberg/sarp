<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<?$mdl= $page
		->children()
		->visible()
		->filterBy('cover','!=','')
		->map(function($pg){
			if( $pg->hasImages() )
				$fi= $pg->cover()->toFile()->toArray();
			else $fi= false;
			return $fi;
			});
		?>
		<ui-cover-img data-model="<?=Ui::att($mdl)?>"></ui-cover-img>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>