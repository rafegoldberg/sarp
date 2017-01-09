<?if($pagination->hasPages()):?>
  <nav class="pagination wrap cf">
    <?if($pagination->hasPrevPage()):?>
      <a class="pagination-item left" href="<?=$pagination->prevPageURL()?>" rel="prev" title="newer articles">
        <?=(new Asset("assets/images/arrow-left.svg"))->content()?>
      </a>
    <?else:?>
      <span class="pagination-item left is-inactive">
        <?=(new Asset("assets/images/arrow-left.svg"))->content()?>
      </span>
    <?endif?>
    <?if($pagination->hasNextPage()):?>
      <a class="pagination-item right" href="<?=$pagination->nextPageURL()?>" rel="next" title="older articles">
        <?=(new Asset("assets/images/arrow-right.svg"))->content()?>
      </a>
    <?else:?>
      <span class="pagination-item right is-inactive">
        <?=(new Asset("assets/images/arrow-right.svg"))->content()?>
      </span>
    <?endif?>
  </nav>
<?endif?>