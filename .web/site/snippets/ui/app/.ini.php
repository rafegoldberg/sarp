<!DOCTYPE html>
<html lang="<?=site()->language() ? site()->language()->code() : 'en'?>">
<head>
  <?#=Ui->ini
    snippet('Ui');
    Ui::ini(array(
      ajaxBase=>'/api',
      localUrl=> array(
        uiBase=> '/'.url::path( $kirby->urls()->assets() ).'/ui',
        reload=> false,
        )
      ))?>
  <?#=Misc
    snippet('ui/dev/pre.css');
    snippet('ui/dev/pre.js');
    ?>
  <!--|
   ENV
   |-->
  <!--fonts-->
  <!--style-->
    <?=css('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')?>
  <!--|
   META
   |-->
  <!--page-->
    <meta charset="UTF-8">
    <title><?=$site->shorttitle()->lower()->html()?>::<?=$page->title()->lower()->html()?></title>
    <meta name="description" content="<?=$site->description()->html()?>">
  <!--view-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<app-main>