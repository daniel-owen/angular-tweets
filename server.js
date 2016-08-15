// get rob's notes from github
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8000, function(){
	console.log('Listening on port 8000...');
});