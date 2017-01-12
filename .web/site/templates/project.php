<?#=UiApp:top->
  snippet('ui/app/top');
  ?>
<ui-page>
  <!--|
    <h2 style="font-family:Helvetica Neue,Helvetica,sans-serif">
      <?#=$page->title()->html()?></h2>
   |-->
  <script>console.log(<?=json_encode($page->images()->first())?>)</script>
  <?foreach( $page->images()->sortBy('sort', 'asc') as $img ):
    ?>
    <figure is="ui-figure" data-model="<?=Ui::att($img->toArray())?>"></figure>
    <?endforeach?>
</ui-page>
<?#=UiApp:btm->
  snippet('ui/app/btm');
  ?>