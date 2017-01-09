<?snippet('app/top')
  ?>

<?snippet('header')?>
<main class="main" role="main">
  <div class="text wrap">
    <?=$page->text()->kirbytext()?>
  </div>
  <section class="projects-section">
    <?snippet('showcase',['limit'=>3])?>
    <div style="text-align:center">
      <br>
      <a
       href="<?=page('projects')->url()?>"
       style="padding:0 .25em;"
       >
        <mark><em><b>all projects...</b></em></mark>
      </a>
    </div>
  </section>
</main>
<?snippet('footer')?>

<script>console.log(<?=json_encode($test)?>)</script>

<?snippet('app/btm')
  ?>