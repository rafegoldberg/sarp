var
crossSwipe= function(usr={}){
	if(!( this instanceof crossSwipe ))
		return new crossSwipe();//called w/o new
  Object.assign(this,{
    bem:{ element:'-', modifier:'_' },
    repeat:['zed','one','two'],
    select:'uniq'
    },usr);
  };//constructor
crossSwipe.prototype= {
  template:'.swiper>.-container[js-select=${select}]>.-wrapper>.-slide*',
  render(opt={}){
    var
    opt= $.extend(true,{
    	text: this.repeat,
	    variables: {select:this.select},
    	addons: {bem:this.bem},
		  },opt),
    htm= UiApp.fn.emmet.exp(this.template,opt),
    dom= $(htm).children('.swiper-container')[0];//$(htm)[0];
    return dom;
    }
  };//prototype

module.exports= function(select,repeat=[]){
	var
	$dom= $(ø.create(crossSwipe(),{select,repeat}).render()),
	swiper= ø.partial(UiApp.plugin.swiper,$dom[0]);
	return Object.assign($dom,{swiper});
	}