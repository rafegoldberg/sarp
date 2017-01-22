var
tag= {
	lifecycle:{
		inserted(){
			this.bem={root: 'list'};
			this.bem.make= UiApp.bem.it(this.bem.root);
			
			$(this).addClass(this.bem.make({'pre=int':true}));
			this.render();
			}
		},
	mixins: ['datamodel'],
  methods:{
		template:require('./template.bar'),//=Ui module .bar file
    render(){
      this.model && this.template//if both:
	      $(this).html( this.template(this.model) );//render + replace html
      }
     }
  };

module.exports= new Tag(tag);