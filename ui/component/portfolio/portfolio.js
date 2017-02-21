var Bb=require('backbone');

module.exports={
  Project:Bb.Model.extend({
    defaults:{}
    }),//model
  Portfolio:Bb.Collection.extend({
    url:'/projects'
    }),//collection
  View:Bb.View.extend({
    tagName: 'ui-test',
    className: 'swiper-container',
    template: require('./template.bar'),
    render(){
      console.log(this);
      var
      dom= this.template(this.collection.toJSON());
      this.$el.html(dom).appendTo('body');
      this.swiper= new UiApp.plug.swiper(this.el);
      return this;
      },
    initialize(){
      },
    }),//view
  create(fn){
    var self=this;//alias[deep this]
    var//backbone[construct instances]
    prjs= new self.Portfolio(null,{
      model: self.Project
      }),
    view= new self.View({collection:prjs});
    prjs//load+callback
      .fetch()
      .then(fn||false);
    return view;
    },
  };