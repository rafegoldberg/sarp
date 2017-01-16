(function($){

  //set initial state
    History.replaceState(
      UiApp.page.model,
      $('head>title').text(),
      window.location.href
      );
  //=statechange event
    History.Adapter.bind(window,'statechange',function(){
      UiApp.page.render(History.getState().data);
      // Log.log('History.getState().data',History.getState().data);
      });

	})(jQuery)