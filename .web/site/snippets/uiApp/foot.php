<app-footer>
	<hr style="margin:1em;opacity:.5">
	<footer
	 role="contentinfo"
	 style="display:flex;justify-content:space-between"
	 >
		<div>
			<span><i class="fa fa-instagram"></i></span>
			/
			<span><i class="fa fa-facebook"></i></span>
		</div>
	  <div>
	  	<?=html::decode($site->copyright()->kirbytext())?>
	  </div>
	</footer>
	<hr style="margin:1em;opacity:.5">
</app-footer>