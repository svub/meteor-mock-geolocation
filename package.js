Package.describe({
  name: 'svub:mock-location',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.7');
  api.use('ecmascript');
  api.mainModule('mock-location.js', 'client');
  api.export("MockLocation", "client");
});