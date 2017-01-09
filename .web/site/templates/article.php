<?snippet('app/top')
 ?>

<?snippet('header')?>
<main class="main" role="main">
  <article class="article single wrap">
    <?snippet('coverimage', $page)
     ?>
    <div class="text">
      <?=$page->text()->kirbytext()?>
    </div>
  </article>
</main>
<?snippet('footer')?>

<?snippet('app/btm')
 ?>