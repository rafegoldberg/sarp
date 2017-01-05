//=specify tests 
	/*=Touch
	 */ 
		require('browsernizr/test/touchevents');
	/*=Forms
	 */ 
		require('browsernizr/test/forms/formattribute');
		require('browsernizr/test/forms/placeholder');
		require('browsernizr/test/forms/validation');
	/*=CSS 
	 */ 
		require('browsernizr/test/css/all');
		require('browsernizr/test/css/animations');
		require('browsernizr/test/css/appearance');
		require('browsernizr/test/css/backdropfilter');
		require('browsernizr/test/css/backgroundblendmode');
		require('browsernizr/test/css/backgroundcliptext');
		require('browsernizr/test/css/backgroundposition-shorthand');
		require('browsernizr/test/css/backgroundposition-xy');
		require('browsernizr/test/css/backgroundrepeat');
		require('browsernizr/test/css/backgroundsize');
		require('browsernizr/test/css/backgroundsizecover');
		require('browsernizr/test/css/borderimage');
		require('browsernizr/test/css/borderradius');
		require('browsernizr/test/css/boxshadow');
		require('browsernizr/test/css/boxsizing');
		require('browsernizr/test/css/calc');
		require('browsernizr/test/css/checked');
		require('browsernizr/test/css/chunit');
		require('browsernizr/test/css/columns');
		require('browsernizr/test/css/cubicbezierrange');
		require('browsernizr/test/css/displayrunin');
		require('browsernizr/test/css/displaytable');
		require('browsernizr/test/css/ellipsis');
		require('browsernizr/test/css/escape');
		require('browsernizr/test/css/exunit');
		require('browsernizr/test/css/filters');
		require('browsernizr/test/css/flexbox');
		require('browsernizr/test/css/flexboxlegacy');
		require('browsernizr/test/css/flexboxtweener');
		require('browsernizr/test/css/flexwrap');
		require('browsernizr/test/css/fontface');
		require('browsernizr/test/css/generatedcontent');
		require('browsernizr/test/css/gradients');
		require('browsernizr/test/css/hairline');
		require('browsernizr/test/css/hsla');
		require('browsernizr/test/css/hyphens');
		require('browsernizr/test/css/invalid');
		require('browsernizr/test/css/lastchild');
		require('browsernizr/test/css/mask');
		require('browsernizr/test/css/mediaqueries');
		require('browsernizr/test/css/multiplebgs');
		require('browsernizr/test/css/nthchild');
		require('browsernizr/test/css/objectfit');
		require('browsernizr/test/css/opacity');
		require('browsernizr/test/css/overflow-scrolling');
		require('browsernizr/test/css/pointerevents');
		require('browsernizr/test/css/positionsticky');
		require('browsernizr/test/css/pseudoanimations');
		require('browsernizr/test/css/pseudotransitions');
		require('browsernizr/test/css/reflections');
		require('browsernizr/test/css/regions');
		require('browsernizr/test/css/remunit');
		require('browsernizr/test/css/resize');
		require('browsernizr/test/css/rgba');
		require('browsernizr/test/css/scrollbars');
		require('browsernizr/test/css/scrollsnappoints');
		require('browsernizr/test/css/shapes');
		require('browsernizr/test/css/siblinggeneral');
		require('browsernizr/test/css/subpixelfont');
		require('browsernizr/test/css/supports');
		require('browsernizr/test/css/target');
		require('browsernizr/test/css/textalignlast');
		require('browsernizr/test/css/textshadow');
		require('browsernizr/test/css/transforms');
		require('browsernizr/test/css/transforms3d');
		require('browsernizr/test/css/transformstylepreserve3d');
		require('browsernizr/test/css/transitions');
		require('browsernizr/test/css/userselect');
		require('browsernizr/test/css/valid');
		require('browsernizr/test/css/vhunit');
		require('browsernizr/test/css/vmaxunit');
		require('browsernizr/test/css/vminunit');
		require('browsernizr/test/css/vwunit');
		require('browsernizr/test/css/will-change');
		require('browsernizr/test/css/wrapflow');
	/*=DOM
	 */ 
		require('browsernizr/test/dom/dataset');
		require('browsernizr/test/dom/classlist');
		require('browsernizr/test/dom/microdata');
		require('browsernizr/test/elem/details');
		require('browsernizr/test/elem/progress-meter');
		require('browsernizr/test/elem/template');
	/*=SVG
	 */ 
		require('browsernizr/test/svg');
		require('browsernizr/test/svg/filters');
		require('browsernizr/test/svg/inline');
	/*=Misc.
	 */ 
		require('browsernizr/test/cookies');
		require('browsernizr/test/history');
		require('browsernizr/test/hashchange');
		require('browsernizr/test/hiddenscroll');
		require('browsernizr/test/pointerevents');
		require('browsernizr/test/contextmenu');
		require('browsernizr/test/contenteditable');

//=run Modernizr tests
	require('browsernizr');
//=run + expose instance
//	window.Modernizr= require('browsernizr');
 
//=ALL TESTS
// 
	// a/download
	// ambientlight
	// applicationcache
	// audio
	// audio/loop
	// audio/preload
	// audio/webaudio
	// battery
	// battery/lowbattery
	// blob
	// canvas
	// canvas/blending
	// canvas/todataurl
	// canvas/winding
	// canvastext
	// contenteditable
	// contextmenu
	// cookies
	// cors
	// crypto
	// crypto/getrandomvalues
	// css/all
	// css/animations
	// css/appearance
	// css/backdropfilter
	// css/backgroundblendmode
	// css/backgroundcliptext
	// css/backgroundposition-shorthand
	// css/backgroundposition-xy
	// css/backgroundrepeat
	// css/backgroundsize
	// css/backgroundsizecover
	// css/borderimage
	// css/borderradius
	// css/boxshadow
	// css/boxsizing
	// css/calc
	// css/checked
	// css/chunit
	// css/columns
	// css/cubicbezierrange
	// css/displayrunin
	// css/displaytable
	// css/ellipsis
	// css/escape
	// css/exunit
	// css/filters
	// css/flexbox
	// css/flexboxlegacy
	// css/flexboxtweener
	// css/flexwrap
	// css/fontface
	// css/generatedcontent
	// css/gradients
	// css/hairline
	// css/hsla
	// css/hyphens
	// css/invalid
	// css/lastchild
	// css/mask
	// css/mediaqueries
	// css/multiplebgs
	// css/nthchild
	// css/objectfit
	// css/opacity
	// css/overflow-scrolling
	// css/pointerevents
	// css/positionsticky
	// css/pseudoanimations
	// css/pseudotransitions
	// css/reflections
	// css/regions
	// css/remunit
	// css/resize
	// css/rgba
	// css/scrollbars
	// css/scrollsnappoints
	// css/shapes
	// css/siblinggeneral
	// css/subpixelfont
	// css/supports
	// css/target
	// css/textalignlast
	// css/textshadow
	// css/transforms
	// css/transforms3d
	// css/transformstylepreserve3d
	// css/transitions
	// css/userselect
	// css/valid
	// css/vhunit
	// css/vmaxunit
	// css/vminunit
	// css/vwunit
	// css/will-change
	// css/wrapflow
	// custom-protocol-handler
	// customevent
	// dart
	// dataview-api
	// dom/classlist
	// dom/createElement-attrs
	// dom/dataset
	// dom/documentfragment
	// dom/hidden
	// dom/microdata
	// dom/mutationObserver
	// elem/bdi
	// elem/datalist
	// elem/details
	// elem/output
	// elem/picture
	// elem/progress-meter
	// elem/ruby
	// elem/template
	// elem/time
	// elem/track
	// elem/unknown
	// emoji
	// es5/array
	// es5/date
	// es5/function
	// es5/object
	// es5/specification
	// es5/strictmode
	// es5/string
	// es5/syntax
	// es5/undefined
	// es6/array
	// es6/arrow
	// es6/collections
	// es6/contains
	// es6/generators
	// es6/math
	// es6/number
	// es6/object
	// es6/promises
	// es6/string
	// event/deviceorientation-motion
	// event/oninput
	// eventlistener
	// exif-orientation
	// file/api
	// file/filesystem
	// flash
	// forcetouch
	// forms/capture
	// forms/fileinput
	// forms/fileinputdirectory
	// forms/formattribute
	// forms/inputnumber-l10n
	// forms/placeholder
	// forms/requestautocomplete
	// forms/validation
	// fullscreen-api
	// gamepad
	// geolocation
	// hashchange
	// hiddenscroll
	// history
	// htmlimports
	// ie8compat
	// iframe/sandbox
	// iframe/seamless
	// iframe/srcdoc
	// img/apng
	// img/crossorigin
	// img/jpeg2000
	// img/jpegxr
	// img/sizes
	// img/srcset
	// img/webp-alpha
	// img/webp-animation
	// img/webp-lossless
	// img/webp
	// indexeddb
	// indexeddbblob
	// input
	// input/formaction
	// input/formenctype
	// input/formmethod
	// input/formtarget
	// inputsearchevent
	// inputtypes
	// intl
	// json
	// ligatures
	// lists-reversed
	// mathml
	// network/beacon
	// network/connection
	// network/eventsource
	// network/fetch
	// network/xhr-responsetype-arraybuffer
	// network/xhr-responsetype-blob
	// network/xhr-responsetype-document
	// network/xhr-responsetype-json
	// network/xhr-responsetype-text
	// network/xhr-responsetype
	// network/xhr2
	// notification
	// pagevisibility-api
	// performance
	// pointerevents
	// pointerlock-api
	// postmessage
	// proximity
	// queryselector
	// quota-management-api
	// requestanimationframe
	// script/async
	// script/defer
	// serviceworker
	// speech/speech-recognition
	// speech/speech-synthesis
	// storage/localstorage
	// storage/sessionstorage
	// storage/websqldatabase
	// style/scoped
	// svg
	// svg/asimg
	// svg/clippaths
	// svg/filters
	// svg/foreignobject
	// svg/inline
	// svg/smil
	// templatestrings
	// textarea/maxlength
	// touchevents
	// typed-arrays
	// unicode-range
	// unicode
	// url/bloburls
	// url/data-uri
	// url/parser
	// userdata
	// vibration
	// video
	// video/autoplay
	// video/loop
	// video/preload
	// vml
	// web-intents
	// webanimations
	// webgl
	// webgl/extensions
	// webrtc/datachannel
	// webrtc/getusermedia
	// webrtc/peerconnection
	// websockets
	// websockets/binary
	// window/atob-btoa
	// window/framed
	// window/matchmedia
	// workers/blobworkers
	// workers/dataworkers
	// workers/sharedworkers
	// workers/transferables
	// workers/webworkers
	// xdomainrequest