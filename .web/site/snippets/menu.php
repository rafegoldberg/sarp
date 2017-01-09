<nav class="navigation column" role="navigation">
  <ul class="menu">
    <?foreach( $pages->visible() as $item ):?>
    <li class="menu-item<?=r($item->isOpen(),' is-active')?>">
      <a href="<?=$item->url()?>">
	      <?=$item->title()->html()?></a>
	    </li>
    <?endforeach?>
  </ul>
</nav>