$(document).ready(function() {
  //dom element refs
  // 
    var domref={
      get nav(){ return $('ui-nav')[0]; }
      };
    Object.assign(UiApp,{$:domref});
  /*set initial state
   */ 
    Log.log('$.ready(History.state)',History.getState())
    History.replaceState(
      UiApp.page.model,
      $('head>title').text(),
      window.location.href
      );
  /*=
<APP-PAGE/>
   */ 
    //=menu closed/open
    //@todo[find a better place for this]
      $('app-page').on({
        mouseleave(){
          $('body').removeClass('app-menu=closed');
          },
        mouseenter(){
          $('body').addClass('app-menu=closed');
          }
        });
   //=history change
    History.Adapter.bind(window,'statechange',function(){
      UiApp.page.animateOut(function(){
        UiApp.page.render( History.getState().data );
        window.setTimeout(UiApp.page.animateIn.call(UiApp.page),0);
        });
      });
   //=
    $(document).on({
      rendering(){
        Log.log('$doc.rendering',{args:Array.from(arguments),self:this})
        },
      rendered(){
        Log.log('$doc.rendered',{args:Array.from(arguments),self:this})
        },
      })
  // UiApp.$.nav.render();
  });//doc.ready