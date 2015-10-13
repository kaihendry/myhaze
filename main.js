// TODO: Remove once Safari supports fetch
function fetchJSONFile(path, callback) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				var data = JSON.parse(httpRequest.responseText);
				if (callback) callback(data);
			}
		}
	};
	httpRequest.open('GET', path);
	httpRequest.send();
}

fetchJSONFile('http://data.hazewatchapp.com/index_v2.json', function(json){

selectedIndex = localStorage.selectedIndex || 43;

var ractive = new Ractive({
el: '#container',
template: '#template',
data: { haze: json, selectedIndex: selectedIndex }
});

ractive.observe( 'selectedIndex', function ( index ) {
this.set( 'selectedCity', json.result[ index ] );
localStorage.setItem('selectedIndex', index);
});

});
