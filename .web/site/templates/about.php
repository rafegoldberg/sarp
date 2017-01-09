<?snippet('app/top')
 ?>

<?snippet('header')?>
<main role="main">
  <article class="text">
    <?=$page->text()->kirbytext()?>
  </article>
</main>
<?snippet('footer')?>

<?snippet('app/btm')
 ?>