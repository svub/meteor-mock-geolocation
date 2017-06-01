# meteor-mock-geolocation
A module for Meteor.js to manipulate the browser's geolocation API to mock locations for testing puposes.

## How to use
Add to your Meteor project
  meteor add svub:mock-location

Initialize the module by calling either
  import { configure as configureMockLocation } from "meteor/svub:mock-location";
  configureMockLocation([40,20]);
or the "classic way"
  MockLocation.configure([40,20]);
The array passed to `configure` contains latitude and longitude of the location you want your webapp to see.
If you do not call configure, this package will not interfere with the normal geo location API of your browser.
