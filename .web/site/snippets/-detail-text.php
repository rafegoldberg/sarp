<?if( $page->text()->isNotEmpty() ):
	?>
	<blockquote>
		<b>Text</b>
		<hr>
		<?=$page->text()->kirbytext()?>
	</blockquote>
<?endif#$files?>