<app-header>
	<header>
		<h1><a is="ui-link" href="projects">
			<?=$site->title()->html()?>
		</a></h1>
	</header>
	<?$pages= $pages->visible();
		?>
	<ui-menu data-pages="<?=Ui::att($pages->toArray())?>"></ui-menu>
</app-header>