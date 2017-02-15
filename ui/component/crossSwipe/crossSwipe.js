var
crossSwipe= function(usr={}){
	if(!( this instanceof crossSwipe ))
		return new crossSwipe();//called w/o new
  Object.assign(this,{
    template:'.swiper.-container>.-wrapper>.slide*',
    bem:{ element:'-', modifier:'_' },
    model:['zed','one','two']
    },usr);
  };//constructor
crossSwipe.prototype= {
  render(opt={}){
    var
    mdl= this.model,
    tpl= this.template,
    opt= $.extend(true,{addons:{bem:this.bem},text:mdl},opt),
    run= UiApp.fn.emmet.exp(tpl,opt);
    return run;
    },
  insert(){
	  this.$.appendTo('selector')  	
	  }
  };//prototype

module.exports= crossSwipe;