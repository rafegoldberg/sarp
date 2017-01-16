<script>console.log(<?#=json_encode($page->toArray())?>)</script>
<?#snippet('-detail-page');
	#snippet('-detail-subs');
	#snippet('-detail-text');
	#snippet('-detail-file');
	?>