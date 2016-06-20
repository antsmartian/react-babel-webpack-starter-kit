var express = require('express'), app = express(),
 	port = 8080 , router = express.Router();

router.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

//based on ENV, call the required bundle
if(app.get('env') === 'PROD')
{
	router.get('/dist/bundle.js', function(req, res) {
	    res.sendfile('./public/dist/bundle.min.js');
	});
} else {
	router.get('/dist/bundle.js', function(req, res) {
	    res.sendfile('./public/dist/bundle.js');
	});
}

//set up the router
app.use('/', router);
app.listen(port);
console.log('server started on ' + port);


