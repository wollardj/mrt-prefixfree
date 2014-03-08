Package.describe({
	summary: "Meteorite package to include the prefixfree client-side library."
});


Pacakge.on_use(function(api) {
	api.add_files('prefixfree.min.js', 'client')
});