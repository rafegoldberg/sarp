<?if( $page->content()->has('text') ):
	?>
	<small><blockquote>
			<b>Text</b>
			<hr>
			<?=$page->text()->kirbytext()?>
		</blockquote></small>
<?endif#$files?>