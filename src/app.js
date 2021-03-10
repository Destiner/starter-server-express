const express = require('express');
const app = express();

const router = require('./router');

// CORS
app.use(function(_req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', wrapAsync(router.ok));

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
	console.log(`Listening on port ${port}.`);
});

function errorHandler(err, req, res, next) {
	res.status(400).end();
	next(err);
}

// Helper function to pass error down the middleware chain
function wrapAsync(fn) {
	return function(req, res, next) {
		fn(req, res, next).catch(next);
	};
}
