<app-nav>
	<header>
		<h1>
			<a href="<?=$site->url()?>"><?=$site->title()->html()?></a>
		</h1>
		<hr style="margin-top: 0;">
		<?snippet('nav')?>
		<hr>
		<h2 style="text-align:center;margin:2em auto 1em">
			<?=$page->title()->html()?>
		</h2>
	</header>
</app-nav>