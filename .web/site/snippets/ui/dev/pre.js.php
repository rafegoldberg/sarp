<script id="app@js=quick-onload-queue" files="default">
 function addLoadEvent( func ){
  var old= window.onload;
  if( typeof window.onload!=='function' ){
    window.onload= func;
    }
  else{
    window.onload= function() {
      if( old )
        old();
      func();
      }
    }
  }
  </script>