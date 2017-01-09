<?snippet('app/top')
  ?>

<?snippet('header')?>
<main class="main" role="main">
  <div>
    <?= $page->text()->kirbytext() ?>
    <?php
    // Images for the "project" template are sortable. You
    // can change the display by clicking the 'edit' button
    // above the files list in the sidebar.
    foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
      <figure>
        <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
      </figure>
    <?php endforeach ?>
  </div>
  <?php snippet('prevnext') ?>
</main>
<?snippet('footer')?>

<?snippet('app/btm')
  ?>