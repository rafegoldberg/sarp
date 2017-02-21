var//dependencies
ø=require('underscore'),
BKB=require('backbone');

module.exports={
  Slide:BKB.Model.extend({
    defaults:{}
    }),//model
  Pages:BKB.Collection.extend({
    // url:'/projects'
    url:'/api/portfolio'
    }),//collection
  View:BKB.View.extend({
    el: 'ui-page',
    className: 'swiper-container',
    template: require('./template.bar'),
    render(){
      console.log(this);
      var
      dom= this.template(this.collection.toJSON());
      this.$el.html(dom);
      this.swiper= new UiApp.plug.swiper(this.el);
      return this;
      },
    initialize(){
      console.log('UiApp.modules[app/page]->\ninitialized');
      },
    }),//view
  create(fn){
    var self=this;//alias[deep this]
    var//backbone[instances]
    pages= new self.Pages(null,{
      model: self.Slide
      }),
    view= new self.View({collection:pages});
    pages//load+callback
      .fetch()
      .then(fn||false);
    return view;
    },
  };