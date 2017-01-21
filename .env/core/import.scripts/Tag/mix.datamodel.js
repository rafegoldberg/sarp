module.exports= {
  register(XtagInstance){
    var//grab mixin parts
    methods=   this.mixin.methods,
    accessors= this.mixin.accessors;
    //registerthemixin
    XtagInstance.mixins.datamodel= {methods,accessors};
    XtagInstance.mixins.data=      {methods};
    XtagInstance.mixins.model=     {accessors};
    },//register
  mixin:{
    methods: {
      data: function(){
        var $$= $(this);
        $$.data(...arguments);
        return $$.data();
        },
      },//methods
    accessors: {
      model: {
        attribute: {
          name: 'data-model'
          },
        get: function(){
          var model= this.data();
          delete model.model;
          return model;
          },
        set: function( use ){
          var self=this;//@alias[this]
          //=async get json from url 
          if( Url.valid(use) || UiApp.api.isPath(use) ) 
            return self.load(use);
          //=parse json from att str 
          if( require('is-json')(use) ) 
            self.model= JSON.parse(use);
          else 
            self.data(...arguments);
          return self.model;
          }
        }
      },//accessors
    }//mixin
  };