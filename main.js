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
		for (var i = 0; i < json.result.length; i++) {
			if (json.result[i].lokasi == "Petaling Jaya") {
				console.log(json.result[i]);
				var ractive = new Ractive({
					el: '#container',
					template: '#template',
					data: json.result[i]
				});
			break;
			}
			console.log(json.result[i]);
		}
		});
