module.exports = {
	grunticon: {
		files: [{
			expand: true,
			cwd: '<%=ƒ.icons%>',
			src: ['*.svg', '*.png'],
			dest: '<%=ƒ.dist%>/<%=ƒ.icons%>',
			}],
		options: {
			enhanceSVG: true,
			corsEmbed: true,
			cssprefix: ".ui-icon--"
			}
		},
	copy:  {
		expand: true,
		cwd: '<%=ƒ.dist%>/<%=ƒ.icons%>/',
		dest: '<%=ƒ.bundl%>/<%=ƒ.icons%>',
		src: ['**/*']
		},
	clean: {
		src: '<%=ƒ.dist%>/<%=ƒ.icons%>/'
		}
	}