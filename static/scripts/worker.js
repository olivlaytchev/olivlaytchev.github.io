importScripts('../static/scripts/ocrad.js')
onmessage = function(e){
	alert(OCRAD(e.data))
}