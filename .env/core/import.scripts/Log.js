module.exports= {
//=styling
// 
  css: {
    reset:`
      color:initial;
      font-weight:initial;
      font-style:initial;
      `,
    title:`
      color:#079CB4;
      font-weight:bold;
      `,
    label:`
      color:#9D9D9D;
      font-weight:normal;
      font-style:italic;
      `,
    brite:`
      color:#F9701F;
      font-weight:normal;
      font-style:normal;
      `
    },
  Format: function( name, label ){
    if( arguments.length==1 && typeof(arguments[0])==='string' )
      return [ '%c%s', this.css.brite, name ];
    if( arguments.length==2 )
      return [ '%c%s %c%s', this.css.title, name, this.css.label, label ];
    else
      return Array.from(arguments);
    },
//=methods
// 
  clear: function(){
    console.clear();
    },
  _group: function(){
    console.groupCollapsed(...arguments);
    },
   group:  function(){
    var args= this.Format(...arguments);
    if( args.length==0 )
      console.groupEnd();
    else
      this._group(...args);
    },
  _groop: function(){
    console.group(...arguments);
    },
   groop:  function(){
    var args= this.Format(...arguments);
    if( args.length==0 )
      console.groupEnd();
    else
      this._groop(...args);
    },
  close:  function(){
    console.groupEnd();
    if( arguments.length )
      this.label(...arguments)
    },
  title: function(){
    var args= Array.from(arguments);
    console.log( '%c%s%c', this.css.title, args.shift(), this.css.reset, ...args );
    },
  label: function(){
    var args= Array.from(arguments);
    console.log( '%c%s%c', this.css.label, args.shift(), this.css.reset, ...args );
    },
  _data: function( name, data, label ){
    var label= label && ` ${label}` || '',
        lnFmt= data && data.tagName && '%c%s%c%s %o' || '%c%s:%c%s %O';
    console.log( lnFmt, this.css.title, name, this.css.label, label, data )
    },
   data:  function(){
    this._data( ...arguments );
    },
  _text: function(){
    console.log(...arguments);
    },
   text:  function(){
    var args= this.Format(...arguments);
    this._text( ...args );
    },
  plain(ttl,obj){
    if( obj && ttl ){
      var
      css= 'font-weight:bold;text-decoration:underline',
      ttl= ttl.split(' ').map(str=>str.replace(str[0],str[0].toUpperCase())).join(' ');
      console.log(`%c${ttl}\n%O`,css,obj);
      }
    else
      console.log(arguments[0]);
    },
//=aliases
// 
  clr:  function(){ this.clear(...arguments) },
  gpc:  function(){ this.group(...arguments) },
  gpo:  function(){ this.groop(...arguments) },
  end:  function(){ this.close(...arguments) },
  ttl:  function(){ this.title(...arguments) },
  lbl:  function(){ this.label(...arguments) },
  dom:  function(){ this.data( ...arguments) },
  json: function(){ this.data( ...arguments) },
  obj:  function(){ this.data( ...arguments) },
  txt:  function(){ this.text( ...arguments) },
  ln:   function(){ this.text( ...arguments) },
  log:  function(){ this.plain(...arguments) },
}