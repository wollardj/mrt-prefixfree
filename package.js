Package.describe({
	summary: "Meteorite package to include the prefixfree client-side library."
});


Package.on_use(function(api) {
	api.add_files('prefixfree.min.js', 'client')
});