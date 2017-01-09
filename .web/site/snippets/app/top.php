<!DOCTYPE html>
<html lang="<?=site()->language() ? site()->language()->code() : 'en'?>">
<head>
  <?#=Ui->ini
    require_once('./site/snippets/ui.php');
    Ui::ini(array(
      ajaxBase=>'./',
      localUrl=> array(
        uiBase=> '/' . url::path( $kirby->urls()->assets() ) . '/ui',
        reload=> false,
        )
      ))?>
  <!--|
   ENV
   |-->
  <!--fonts-->
    <link href="https://fonts.googleapis.com/css?family=Eczar:800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i" rel="stylesheet">
    <?=css('assets/fonts/bebas-neue/import.css')?>
  <!--style-->
    <?=css('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')?>
    <?if( url::host()=='0.0.0.0' || url::host()=='localhost' ):?>
        <style id='app@css=settings'>
          :root{/*colors*/
            --c-txt: #3C3C3C;
            --c-bgc: #F3F3F3;
            }
          :root{/*layout*/
            --l-wide: 35em;
            --l-space: 1rem;
            }
          :root{/*typeset*/
            --f-z-base: 13pt;
            --f-z-sm: 85%;
            }
        </style>
        <style id='app@css=base'>
          * {
            box-sizing: border-box;
            margin: initial;
            padding: initial;
            line-height: 1;
            }
          html {
            /*typeset*/
            font: normal normal var(--f-z-base)/1 sans-serif;
            /*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";*/
            /*theme*/
            background: var(--c-bgc) !important;
            color: var(--c-txt) !important;
            }
          body {
            margin: 0;
            font-family: 'Space Mono', monospace;
            font-size: 100%;
            /*testing*/
            width: var(--l-wide);
            max-width: 100%;
            margin: 0 auto;
            }
        </style>
        <style id='app@css=generic'>
          a {
            text-decoration: none;
            color: inherit;
            line-height: initial;
            }
          a:active h6 {
            letter-spacing: 0;
            text-decoration-color: transparent;
            }

          p {
            margin-bottom: 1em;
            line-height: 1.5;
            }

          img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
            }

          figure {
            display: block;
            max-width: 100%;
            margin: 1em auto;
            }

          h1, h2, h3, h4, h5, h6 {
            font-family: Eczar, serif;
            font-weight: 900;
            }
          h6 {
            font-size: inherit;
            line-height: inherit;
            text-transform: lowercase;
            }
          a h6 {
            letter-spacing: .125em;
            text-decoration: line-through;
            transition: letter-spacing .5s ease, text-decoration .5s .25s ease;
            }

          ul {
            list-style: none;
            text-align: center;
            }

          hr {
            margin: 1em auto;
            opacity: .5;
            }

          footer {
            font-size: .75em;
            }
        </style>
        <style id='app@css=layout'>
          html {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 100vw;
            min-height: 100vh;
            }
          app-main,
          app-nav,
          app-footer {
            display: block;
          }
          app-nav {
            position: sticky;
            top: -3.75em;
            display: block;
            background: #F3F3F3;
            background: rgba(243,243,243,.9625);
            margin: 3em 0;
            text-align: center;
            z-index: 1;
            font-size: 1rem;
          }
          html.csspositionsticky app-nav {
            /*content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: red;*/
            box-sizing: content-box;
            width: 100%;
            padding: 0 var(--l-space);
            margin: 0 calc(-1 * var(--l-space));
            }
          app-nav h2 {
            display: none;
            }
          app-nav hr:last-of-type {
            margin-bottom: 0;
            }
          app-footer {
            margin-top: 1.5em;
            text-align: center;
            color: #999;
            }
          @media( max-width:675px ) {
          body {
            font-size: var(--f-z-sm);
            }
          app-main {
            padding: 0 var(--l-space);
            }
          }
          @media( min-width:675px ) {
          app-main {
            display: flex;
            flex-flow: column wrap;
            min-width: var(--l-wide);
            min-height: var(--l-wide);
            justify-content: space-between;
            }
          }
        </style>
        <style id='app@css=assorted'>
          a.showcase-link {
            display: block;
            position: relative;
            }
          a.showcase-link h3 {
            position: absolute;
            top: 50%;
            left: calc(-1 * var(--l-space));
            letter-spacing: 0;
            display: inline-block;
            line-height: 2;
            padding: 0 .5em;
            color: var(--c-txt);
            border-left: 5px solid var(--c-txt);
            background: var(--c-bgc);
            font-family: 'bebas neue';
            transform: translateY(-50%);
            font-size: 175% !important;
            }
          li:nth-child(even) a.showcase-link h3 {
            border-left: none;
            border-right: 5px solid var(--c-txt);
            left: initial;
            right: calc(-1 * var(--l-space));
            }
        </style>
      <?else:?>
        <style id='app@css=prefixed'>body,img{margin:0 auto;max-width:100%}body,figure,img{max-width:100%}figure,hr{margin:1em auto}app-footer,app-main,app-nav,figure,img{display:block}app-footer,app-nav,ul{text-align:center}:root{--c-txt:#3C3C3C;--c-bgc:#F3F3F3;--l-wide:35em;--l-space:1rem;--f-z-base:13pt;--f-z-sm:85%}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:initial;padding:initial;line-height:1}html{font:normal normal var(--f-z-base)/1 sans-serif;background:var(--c-bgc)!important;color:var(--c-txt)!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;min-width:100vw;min-height:100vh}body{font-family:'Space Mono',monospace;font-size:100%;width:var(--l-wide)}a{text-decoration:none;color:inherit;line-height:initial}a:active h6{letter-spacing:0;-webkit-text-decoration-color:transparent;-moz-text-decoration-color:transparent;text-decoration-color:transparent}p{margin-bottom:1em;line-height:1.5}h1,h2,h3,h4,h5,h6{font-family:Eczar,serif;font-weight:900}h6{font-size:inherit;line-height:inherit;text-transform:lowercase}a h6{letter-spacing:.125em;text-decoration:line-through;-webkit-transition:letter-spacing .5s ease,text-decoration .5s .25s ease;-o-transition:letter-spacing .5s ease,text-decoration .5s .25s ease;-moz-transition:letter-spacing .5s ease,text-decoration .5s .25s ease;transition:letter-spacing .5s ease,text-decoration .5s .25s ease}ul{list-style:none}hr{opacity:.5}footer{font-size:.75em}app-nav{position:-webkit-sticky;position:sticky;top:-3.75em;background:#F3F3F3;background:rgba(243,243,243,.9625);margin:3em 0;z-index:1;font-size:1rem}html.csspositionsticky app-nav{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;width:100%;padding:0 var(--l-space);margin:0 -webkit-calc(-1 * var(--l-space));margin:0 -moz-calc(-1 * var(--l-space));margin:0 calc(-1 * var(--l-space))}app-nav h2{display:none}app-nav hr:last-of-type{margin-bottom:0}app-footer{margin-top:1.5em;color:#999}@media(max-width:675px){body{font-size:var(--f-z-sm)}app-main{padding:0 var(--l-space)}}@media(min-width:675px){app-main{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;min-width:var(--l-wide);min-height:var(--l-wide);-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}a.showcase-link{display:block;position:relative}a.showcase-link h3{position:absolute;top:50%;left:-webkit-calc(-1 * var(--l-space));left:-moz-calc(-1 * var(--l-space));left:calc(-1 * var(--l-space));letter-spacing:0;display:inline-block;line-height:2;padding:0 .5em;color:var(--c-txt);border-left:5px solid var(--c-txt);background:var(--c-bgc);font-family:'bebas neue';-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);font-size:175%!important}li:nth-child(even) a.showcase-link h3{border-left:none;border-right:5px solid var(--c-txt);left:initial;right:-webkit-calc(-1 * var(--l-space));right:-moz-calc(-1 * var(--l-space));right:calc(-1 * var(--l-space))}</style>
      <?endif#prefixed?>
  <!--|
   META
   |-->
  <!--page-->
    <meta charset="UTF-8">
    <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
    <meta name="description" content="<?= $site->description()->html() ?>">
  <!--view-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<app-main>