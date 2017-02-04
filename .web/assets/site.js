$(document).ready(function(){
/*=UiApp.$#domref
\*/
  // var domref={
  //   get nav(){
  //     return $('ui-nav')[0]
  //     }
  //   };
  // Object.assign(UiApp, {$:domref} );
/*=UiApp@history
\*/
  History.Adapter.bind(window,'statechange',function(){
    UiApp.page.animateOut(function(){
      UiApp.page.render( History.getState().data );
      window.setTimeout(UiApp.page.animateIn.call(UiApp.page),0);
      });
    });
/*=UiApp@page
 */
  //=MENU TOGGLE
  //@todo[find a better place for this]
  $('trigger').on('contextmenu',function(ev){
    ev.preventDefault();
    $('body')
      .toggleClass('app-menu=closed');
    });
});///ready