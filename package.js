Package.describe({
  name: 'svub:mock-location',
  version: '0.0.1',
  summary: 'Manipulates the browser\'s geolocation API to mock locations for testing puposes.',
  git: 'https://github.com/svub/meteor-mock-geolocation.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.7');
  api.use('ecmascript');
  api.mainModule('mock-location.js', 'client');
  api.export("MockLocation", "client");
});