(function($){

  //set initial state
    History.replaceState(
      UiApp.page.model,
      $('head>title').text(),
      window.location.href
      );
  //=statechange event
    History.Adapter.bind(window,'statechange',function(){
      UiApp.page.animateOut(function(){
        UiApp.page.render( History.getState().data );
        window.setTimeout(UiApp.page.animateIn.call(UiApp.page),0);
        });
      // Log.log('History.getState().data',History.getState().data);
      });

	})(jQuery)