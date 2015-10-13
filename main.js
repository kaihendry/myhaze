fetch('http://data.hazewatchapp.com/index_v2.json')
.then(function(response) {
	return response.json()
}).then(function(json) {
	// console.log('parsed json', json)
		for (var i = 0; i < json.result.length; i++) {
			if (json.result[i].lokasi == "Petaling Jaya") {
				console.log(json.result[i]);
				var ractive = new Ractive({
					el: '#container',
					template: '#template',
					data: json.result[i]
				});
			}
		}
}).catch(function(ex) {
	console.log('parsing failed', ex)
})
