$(document).ready(function(){
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
	UiApp.toggle= $('<app-menu-trigger/>')
		.click(function(e){
			$('body').toggleClass('app-menu=closed')
			})
		.appendTo('app-menu')
		[0];
});///ready