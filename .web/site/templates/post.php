<?#=UiApp:top->
	snippet('ui/app/top');
	?>
<ui-page data-model="./api/projects">
	<article>
		<h2><?=$page->title()->html()?></h2>
		<br><hr><br>
		<section>
			<?=$page->text()->kirbytext()?>
		</section>
	</article>
</ui-page>
<?#=UiApp:btm->
	snippet('ui/app/btm');
	?>