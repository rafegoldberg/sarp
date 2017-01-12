<app-footer>
	<small>
		<b>view&nbsp;</b>
	</small>
	<div style="margin:0 auto 0 0">
		<?snippet('ui/dev/-pageSelect')?>
	</div>
	<footer role="contentinfo">
	  <?=html::decode($site->copyright()->kirbytext())?>
	</footer>
</app-footer>