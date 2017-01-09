<?snippet('app/top')
  ?>

<?snippet('header')?>
<main role="main">
  <section>
    <?if($articles->count()):?>
      <?foreach($articles as $article):?>
        <article class="article index">
          <header class="article-header">
            <h2 class="article-title">
              <a href="<?=$article->url()?>"><?=$article->title()->html()?></a>
            </h2>
            <p class="article-date"><?=$article->date('F jS, Y')?></p>
          </header>
          <?snippet('coverimage', $article)?>
          <div class="text">
            <p>
              <?=$article->text()->kirbytext()->excerpt(50,'words')?>
              <br>
              <a href="<?=$article->url()?>"><mark><em>read more</em></mark></a>
            </p>
          </div>
        </article>
      <?endforeach?>
    <?else:?>
      <p>[nullset]</p>
    <?endif?>
  </section>
  <?snippet('pagination')?>
</main>
<?snippet('footer')?>

<?snippet('app/btm')
  ?>