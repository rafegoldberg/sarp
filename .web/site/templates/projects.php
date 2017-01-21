<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<header>
		<h1 class="[ heading heading--2 ]"><?=$page->title()->html()?></h1>
	</header>
	<main>
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
			<ui-coverimg data-model="<?=Ui::att($mdl)?>"></ui-coverimg>
	</main>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>