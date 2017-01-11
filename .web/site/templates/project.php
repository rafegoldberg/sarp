<?#app:top->
  snippet('ui/.run');
  snippet('ui/head')
  ?>
<ui-page>
  <?foreach( $page->images()->sortBy('sort', 'asc') as $img ):
    ?>
    <figure is="ui-figure">
      <img src="<?=$img->url()?>" alt="<?=$page->title()->html()?>"/>
    </figure>
    <?endforeach?>
</ui-page>
<?#app:btm->
  snippet('ui/foot');
  snippet('ui/.end')?>