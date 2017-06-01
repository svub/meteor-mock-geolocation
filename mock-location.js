let location = [null, null], 
    initialized = false,
    mock = function(callback) {
      callback({
        coords: {
          accuracy : 30,
          altitude : null,
          altitudeAccuracy : null,
          heading : null,
          latitude : location[0],
          longitude : location[1],
          speed : null
        },
        timestamp : Date.now() });
    },
    mockCurrent = function(callback) {
      mock(callback);
    },
    mockWatch = function(callback) {
      let execute = function() { mock(callback); }
      setTimeout(execute, 2500);
      setInterval(execute, 30000);
    }, 
    initialize = function (mockLocation) {
      location = mockLocation;
      
      if (initialized) return;
      navigator.geolocation.watchPosition = mockWatch;
      navigator.geolocation.getCurrentPosition = mockCurrent;
      initialized = true;
    };

console.log('mocki!');
MockLocation = { configure: initialize };
export const configure = initialize;