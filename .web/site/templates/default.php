<?snippet('app/top')
  ?>

<?snippet('header')?>
<main class="main" role="main">
  <header>
    <h3><?= $page->title()->html() ?></h3>
  </header>
  <div class="text wrap">
    <?= $page->text()->kirbytext() ?>
  </div>
</main>
<?snippet('footer')?>

<?snippet('app/btm')
  ?>