app.use(express.static('./dist/tienda/package.json'));

app.get('/*', function(req, res) {
  	res.sendFile('index.html', {root: 'dist/tienda/package.json/'}
	);
});

app.listen(process.env.PORT || 8080);
