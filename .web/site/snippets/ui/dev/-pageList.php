<ul style="line-height:2">
<?foreach( $page->children()->visible() as $pg ):
	?>
	<li>
		<a is="ui-link"
			href="<?=$pg->id()?>"><?=$pg->title()->html()?></a>
	</li>
	<?endforeach?>
</ul>
