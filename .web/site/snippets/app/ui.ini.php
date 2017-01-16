<!DOCTYPE html>
<html lang="<?=site()->language() ? site()->language()->code() : 'en'?>">
<head>
  <?#=Ui->ini
    snippet('app/Ui');
    Ui::ini(array(
      ajaxBase=> url::path( $kirby->urls()->index() ).'/api',
      localUrl=> [
        uiBase=> '/'.url::path( $kirby->urls()->assets() ).'/ui',
        reload=> false,
        ],
      minified=> array(
        js=> !(url::host()=='0.0.0.0'||url::host()=='localhost'),
        css=>true
        )
      ))?>
  <!--|
   ENV
   |-->
  <!--fonts-->
  <!--external-->
  <?=css('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css')?>
  <?=js('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js')?>
  <!--|
   META
   |-->
  <!--page-->
    <meta charset="UTF-8">
    <title><?=$site->shorttitle()->lower()->html()?></title>
    <meta name="description" content="<?=$site->description()->html()?>">
  <!--view-->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=false">
</head>
<body>