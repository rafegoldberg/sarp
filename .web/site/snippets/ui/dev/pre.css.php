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
      --ff-mono:  Roboto Mono,
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
      max-width: 62.5em;
      margin: 0 auto;
      min-height: calc(var(--l-wide) * .75);
      max-height: 100vh;
      }

    app-main {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      min-height: calc(var(--l-wide) * .75);
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      background: rgba(243,243,243,.9);
      border-width: 0 0 1px;
      padding: var(--l-space);
      margin: 0 calc(-1 * var(--l-space));
      color: rgba(15,15,15,.5);
      }
    app-header {
      top: 0;
      margin-top: calc(var(--l-space)*4);
      margin-bottom: calc(var(--l-space)*2);
      }
    app-footer {
      bottom: -1px;
      margin-top: calc(var(--l-space)*1.5);
      margin-bottom: calc(var(--l-space)*1.5);
      }

    app-page {
      text-align: left;
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
      app-main {
        min-height: 75vh;
        }
      }
  </style>
<?else:
  ?>
  <style id='app@css=prefixed'>body,img{margin:0 auto;max-width:100%}body,figure,img{max-width:100%}figure,hr{margin:1em auto}app-footer,app-main,app-nav,figure,img{display:block}app-footer,app-nav,ul{text-align:center}:root{--c-txt:#3C3C3C;--c-bgc:#F3F3F3;--l-wide:35em;--l-space:1rem;--fz-base:13pt;--fz-sm:85%;--ff-serif:Hoefler Text,serif;--ff-mono:Roboto Mono,monospace;--ff-sans:-apple-system,'Helvetica Neue',Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:initial;padding:initial;line-height:1}html{font:normal normal var(--fz-base)/1 var(--ff-sans);background:var(--c-bgc)!important;color:var(--c-txt)!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;min-width:100vw;min-height:100vh}body{font-family:var(--ff-mono);font-size:100%;width:var(--l-wide)}a{text-decoration:none;color:inherit;line-height:initial}a:active h6{letter-spacing:0;-webkit-text-decoration-color:transparent;-moz-text-decoration-color:transparent;text-decoration-color:transparent}p{margin-bottom:1em;line-height:1.5}h1,h2,h3,h4,h5,h6{font-family:var(--ff-serif);font-weight:900}h6{font-size:inherit;line-height:inherit;text-transform:lowercase}a h6{letter-spacing:.125em;text-decoration:line-through;-webkit-transition:letter-spacing .5s ease,text-decoration .5s .25s ease;-o-transition:letter-spacing .5s ease,text-decoration .5s .25s ease;-moz-transition:letter-spacing .5s ease,text-decoration .5s .25s ease;transition:letter-spacing .5s ease,text-decoration .5s .25s ease}ul{list-style:none}hr{opacity:.5}footer{font-size:.75em}app-nav{position:-webkit-sticky;position:sticky;top:-3.75em;background:#F3F3F3;background:rgba(243,243,243,.9625);margin:3em 0;z-index:1;font-size:1rem}html.csspositionsticky app-nav{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;width:100%;padding:0 var(--l-space);margin:0 -webkit-calc(-1 * var(--l-space));margin:0 -moz-calc(-1 * var(--l-space));margin:0 calc(-1 * var(--l-space))}app-nav h2{display:none}app-nav hr:last-of-type{margin-bottom:0}app-footer{margin-top:1.5em;color:#999}@media(max-width:675px){body{font-size:var(--fz-sm)}app-main{padding:0 var(--l-space)}}@media(min-width:675px){app-main{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;min-width:var(--l-wide);min-height:var(--l-wide);-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}</style>
<?endif
  #(url:host)vanilla/prefixed?>