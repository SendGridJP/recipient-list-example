var url = require('url');
var http = require('http');
http.createServer(function handler(req, res) {
	
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	
	var csv = ''
		, data = [
		          ['sample1@email.com', 'Sample1 Taro', 'm']
		          , ['sample2@email.com', 'Sample2 Hanako', 'f']
		          , ['sample3@email.com', 'Sample3 Jiro', 'm']
		          ]
		, newData = [
			          ['email', 'name', 'sex']
		             ];
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/csv; charset=UTF-8');
	
	if (query.sex == 'f') {
		data.forEach(function(item){
			if (item[2] == 'f')
				newData.push(item);
		}); 
	} else if (query.sex == 'm' ) {
		data.forEach(function(item){
			if (item[2] == 'm')
				newData.push(item);
		}); 
	} else {
		data.forEach(function(item){
			newData.push(item);
		});
	}

	console.log(newData);
	
	newData.forEach(function(item) {
		csv += item.map(function(field) {
			return '"' + field.toString().replace(/\"/g, '""') + '"';
		}).toString() + '\r\n';
	});
	res.write(csv);
    res.end();
}).listen(process.env.PORT || 1337);
//}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
