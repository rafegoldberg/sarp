<?#=UiApp:top->
	snippet('app.top');
	?>

<ui-page>
	<article>
		<section>
		<?if( ($vurl=$page->vidurl()) && $vurl->isNotEmpty() ):
			$opt= [ $vurl, 560, 315, null ];
			$vid= strpos($vurl->value(),'vimeo') ? call_user_func_array(vimeo,$opt) : false;
			$vid= strpos($vurl->value(),'youtu') ? call_user_func_array(youtube,$opt) : false;
			echo $vid;
			?>
			<?endif#video-url?>
		</section>
		<section><?=$page->text()->kt()?></section>
	</article>
</ui-page>

<?#=UiApp:btm->
	snippet('app.btm');
	?>