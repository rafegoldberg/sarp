<!DOCTYPE html>
<html lang="<?=site()->language() ? site()->language()->code() : 'en'?>">
<head>
  <?#=Ui->ini
    snippet('Ui');
    Ui::ini(array(
      // ajaxBase=> '/'.url::path( $kirby->urls()->index() ).'/api/',
      ajaxBase=> '/api/',
      localUrl=> [
        uiBase=> '/'.url::path( $kirby->urls()->assets() ).'/ui',
        reload=> false,
        ],
      minified=> array(
        js=> !(url::host()=='0.0.0.0'||url::host()=='localhost'),
        css=>true
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
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,600,700,900" rel="stylesheet">
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
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=false">
</head>
<body>