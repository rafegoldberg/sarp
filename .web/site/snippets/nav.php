
<?$pages= $site->pages()->visible();
	?>
<ui-nav data-pages="<?=Ui::att($pages->toArray())?>"></ui-nav>