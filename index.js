// index.js
/*
const { fetchISSFlyOverTimes } = require("./iss");
const { fetchMyIP } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP("162.245.144.188", (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log("It worked! Returned Coords:", coords);
});

fetchISSFlyOverTimes(
  { latitude: "37.38600", longitude: "-122.08380" },
  (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    
    console.log("It worked! Returned flyoverdata:", data);
  }
  );
  */

const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
module.exports = { printPassTimes };
