<!DOCTYPE html>
<html lang="<?=site()->language() ? site()->language()->code() : 'en'?>">
<head>
<!--|
 ENV
 |-->
  <!--fonts-->
  <!--xtrnl-->
<?#UI->INI
  snippet('app/Ui');#import the Ui class
  Ui::ini(array(    #set options + init
    ajaxBase=> r(url::host()!='0.0.0.0','/','').url::path( $kirby->urls()->index() ).'/api',
    localUrl=> [
      uiBase=> '/'.url::path( $kirby->urls()->assets() ).'/ui',
      reload=> false,
      ],
    minified=> array(
      js=> url::host()!='0.0.0.0',
      css=>true
      )
    ))?>
<!--|
 META
 |-->
  <!--page-->
   <meta charset="UTF-8">
   <title><?=$site->shorttitle()->lower()->html()?></title>
   <meta name="description" content="<?=$site->description()->html()?>">
  <!--view-->
   <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
  <!--icon-->
   <link rel="apple-touch-icon" href="<?=url('assets/icn.png')?>">
  <!--ios -->
   <meta name="apple-mobile-web-app-capable" content="yes"/>
   <meta name="apple-mobile-web-app-status-bar-style" content="light">
   <meta name="apple-mobile-web-app-status-bar-style" content="white">
   <meta name="apple-mobile-web-app-status-bar-style" content="lightContent">
</head>
<body>