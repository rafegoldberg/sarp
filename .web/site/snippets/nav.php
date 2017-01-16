<nav>
<?foreach( $site->pages()->visible() as $pg ):
	?>
	<a is="ui-link"
		title="<?=$pg->title()->html()?>"
		href="<?=$pg->id()?>"><?=$pg->title()->html()?></a>
<?endforeach#page->children?>
</nav>
