const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require("./iss-promised");
const { passTimes } = require("./index");
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes);

nextISSTimesForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes);
  })
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });
