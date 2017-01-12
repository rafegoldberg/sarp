<?if( url::host()=='0.0.0.0' || url::host()=='localhost' ):
  ?>
  <style id='app@css=settings'>
    /*=css variables
     */
    :root{/*colors*/
      --c-txt: #222;
      --c-bgc: #F3F3F3;
      --c-bdr: #D6D6D6;
      }
    :root{/*layout*/
      --l-wide: 35em;
      --l-space: 1rem;
      }
    :root{/*typeset*/
      --fz-base: 13pt;
      --fz-sm: 85%;
      --ff-serif: Hoefler Text,
                  serif;
      --ff-mono:  Source Code Pro,
                  Roboto Mono,
                  monospace;
      --ff-sans: -apple-system,
                 'Helvetica Neue',
                  Helvetica,
                  Arial,
                  sans-serif,
                  Apple Color Emoji,
                  Segoe UI Emoji,
                  Segoe UI Symbol;
      }
   </style>
  <style id='app@css=base'>
    /*=defaults
     */
    * {
      box-sizing: border-box;
      margin: initial;
      padding: initial;
      line-height: inherit;
      }
    html {
      font: normal normal var(--fz-base)/1 var(--ff-sans);
      background: var(--c-bgc) !important;
      color: var(--c-txt) !important;
      }
    body {
      margin: 0;
      font-family: var(--ff-mono);
      font-size: 100%;
      }
   </style>
  <style id='app@css=generic'>
    /*=unclassed elems
     */
    a {
      text-decoration: none;
      color: inherit;
      }
    article {
      max-width: var(--l-wide);
      }
    p {
      margin-bottom: 1em;
      line-height: 1.5;
      }
    p:last-child,
    p:last-of-type {
      margin-bottom: 0;
      }
    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
      }
    figure {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      }
    figure + figure {
      margin-top: var(--l-space);
      }
    h1, h2, h3, h4, h5, h6 {
      font-weight: 900;
      }
    h1, h2, h3 {
      font-size: 1.5em;
      }
    h4, h5, h6 {
      font-size: 1.25em;
      }
    ul {
      list-style: none;
      text-align: center;
      }
    hr {
      margin: 0 auto;
      opacity: .5;
      }
    code {
      font: inherit;
      font-family: var(--ff-mono);
      background: #DDD;
      display: inline-block;
      padding: .375em .25em;
      border-radius: 2px;
      }
    footer {
      font-size: .75em;
      }
   </style>
  <style id='app@css=generic-form'>
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      padding: .375em;
      font: inherit;
      font-size: .75em;
      line-height: 1.4;
      background: initial;
      border: 1px solid rgba(157,157,157,.5);
      border-radius: 2px;
      outline: none;
      }
   </style>
  <style id='app@css=aesthetic'>
    /*=staging area
     */
    html {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 100vw;
      min-height: 100vh;
      }
    body {
      width: 100%;
      margin: 0 auto;
      /*min-height: calc(var(--l-wide) * .75);*/
      min-height: calc(100vh + (var(--l-space)*1.5));
      max-height: calc(100vh + (var(--l-space)*1.5));
      }

    app-main {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      /*min-height: calc(var(--l-wide) * .75);*/
      min-height: calc(100vh + (var(--l-space)*1.5));
      padding: 0 var(--l-space);
      }

    body,
    app-main {
      transition:
        font-size .375s ease, color .375s ease,
        max-height .375s ease, max-width .375s ease,
        height .375s ease, width .375s ease,
        min-height .375s ease, min-width .375s ease;
      }


    app-header,
    app-footer {
      position: sticky;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 calc(-1 * var(--l-space));
      padding: var(--l-space);
      background: var(--c-bgc);
      color: rgba(15,15,15,.5);
      border-width: 0 0 1px;
      max-width: 100vw;
      }

    app-header {
      top: 0;
      margin-top: calc(var(--l-space)*4);
      margin-bottom: calc(var(--l-space)*2);
      }
    app-header h1 a {
      padding: .25em .375em;
      padding-left: 0;
      }

    app-footer {
      bottom: -1px;
      flex-flow: wrap row;
      margin-top: calc(var(--l-space)*1.5);
      margin-bottom: calc(var(--l-space)*1.5);
      }

    app-page {
      text-align: left;
      }

    #bottomBranding {
      display: block;
      width: 100%;
      bottom: 100%;
      box-shadow: 100vh 0 0 #222222, -100vh 0 0 #222222;
      padding: calc(var(--l-space)*1.5) var(--l-space);
      text-align: center;
      text-shadow: 0 1px 0 black;
      color: #888;
      background-color: var(--c-txt);
      }
   </style>
  <style id='app@css=responsive'>
    /*=media queries
     */
    @media( min-width:675px ){
      app-main {
        min-width: var(--l-wide);
        padding: 0 calc(var(--l-space) * 2);
        }
      }
    @media( max-width:675px ){
      body {
        font-size: var(--fz-sm);
        }
      }
    @media( max-width:425px ){
      }
   </style>
<?else:
  ?>
  <style id='app@css=prefixed'>
    figure,img{max-width:100%;margin:0 auto;display:block}code,select{display:inline-block}app-main,body{min-height:-webkit-calc(100vh + (var(--l-space) *1.5));min-height:-moz-calc(100vh + (var(--l-space) *1.5))}app-footer,app-header,app-main,html{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox}figure,img{display:block}:root{--c-txt:#222;--c-bgc:#F3F3F3;--c-bdr:#D6D6D6;--l-wide:35em;--l-space:1rem;--fz-base:13pt;--fz-sm:85%;--ff-serif:Hoefler Text,serif;--ff-mono:Source Code Pro,Roboto Mono,monospace;--ff-sans:-apple-system,'Helvetica Neue',Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:initial;padding:initial;line-height:inherit}html{font:normal normal var(--fz-base)/1 var(--ff-sans);background:var(--c-bgc)!important;color:var(--c-txt)!important;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;min-width:100vw;min-height:100vh}body{font-family:var(--ff-mono);font-size:100%}a{text-decoration:none;color:inherit}article{max-width:var(--l-wide)}p{margin-bottom:1em;line-height:1.5}p:last-child,p:last-of-type{margin-bottom:0}figure+figure{margin-top:var(--l-space)}body,hr{margin:0 auto}h1,h2,h3,h4,h5,h6{font-weight:900}h1,h2,h3{font-size:1.5em}h4,h5,h6{font-size:1.25em}ul{list-style:none;text-align:center}hr{opacity:.5}code{font:inherit;font-family:var(--ff-mono);background:#DDD;padding:.375em .25em;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}footer{font-size:.75em}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:.375em;font:inherit;font-size:.75em;line-height:1.4;background:initial;border:1px solid rgba(157,157,157,.5);-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;outline:0}body{width:100%;min-height:calc(100vh + (var(--l-space) *1.5));max-height:-webkit-calc(100vh + (var(--l-space) *1.5));max-height:-moz-calc(100vh + (var(--l-space) *1.5));max-height:calc(100vh + (var(--l-space) *1.5))}app-main{display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:calc(100vh + (var(--l-space) *1.5));padding:0 var(--l-space)}app-main,body{-webkit-transition:font-size .375s ease,color .375s ease,max-height .375s ease,max-width .375s ease,height .375s ease,width .375s ease,min-height .375s ease,min-width .375s ease;-o-transition:font-size .375s ease,color .375s ease,max-height .375s ease,max-width .375s ease,height .375s ease,width .375s ease,min-height .375s ease,min-width .375s ease;-moz-transition:font-size .375s ease,color .375s ease,max-height .375s ease,max-width .375s ease,height .375s ease,width .375s ease,min-height .375s ease,min-width .375s ease;transition:font-size .375s ease,color .375s ease,max-height .375s ease,max-width .375s ease,height .375s ease,width .375s ease,min-height .375s ease,min-width .375s ease}app-footer,app-header{position:-webkit-sticky;position:sticky;z-index:10;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -webkit-calc(-1 * var(--l-space));margin:0 -moz-calc(-1 * var(--l-space));margin:0 calc(-1 * var(--l-space));padding:var(--l-space);background:var(--c-bgc);color:rgba(15,15,15,.5);border-width:0 0 1px;max-width:100vw}app-header{top:0;margin-top:-webkit-calc(var(--l-space) *4);margin-top:-moz-calc(var(--l-space) *4);margin-top:calc(var(--l-space) *4);margin-bottom:-webkit-calc(var(--l-space) *2);margin-bottom:-moz-calc(var(--l-space) *2);margin-bottom:calc(var(--l-space) *2)}app-header h1 a{padding:.25em .375em .25em 0}app-footer{bottom:-1px;-webkit-flex-flow:wrap row;-ms-flex-flow:wrap row;flex-flow:wrap row;margin-top:-webkit-calc(var(--l-space) *1.5);margin-top:-moz-calc(var(--l-space) *1.5);margin-top:calc(var(--l-space) *1.5);margin-bottom:-webkit-calc(var(--l-space) *1.5);margin-bottom:-moz-calc(var(--l-space) *1.5);margin-bottom:calc(var(--l-space) *1.5)}app-page{text-align:left}#bottomBranding{display:block;width:100%;bottom:100%;-webkit-box-shadow:100vh 0 0 #222,-100vh 0 0 #222;-moz-box-shadow:100vh 0 0 #222,-100vh 0 0 #222;box-shadow:100vh 0 0 #222,-100vh 0 0 #222;padding:-webkit-calc(var(--l-space) *1.5) var(--l-space);padding:-moz-calc(var(--l-space) *1.5) var(--l-space);padding:calc(var(--l-space) *1.5) var(--l-space);text-align:center;text-shadow:0 1px 0 #000;color:#888;background-color:var(--c-txt)}@media(min-width:675px){app-main{min-width:var(--l-wide);padding:0 -webkit-calc(var(--l-space) * 2);padding:0 -moz-calc(var(--l-space) * 2);padding:0 calc(var(--l-space) * 2)}}@media(max-width:675px){body{font-size:var(--fz-sm)}}
    </style>
<?endif
  #(url:host)vanilla/prefixed?>