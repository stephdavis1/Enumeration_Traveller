const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const results = this.journeys.map((journeys) => {
    return journeys.startLocation;
  })
  return results

};

Traveller.prototype.getJourneyEndLocations = function () {
  const results = this.journeys.map((journeys) => {
    return journeys.endLocation;
  })
  return results
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const results = this.journeys.filter((journeys) => {
    return journeys.transport === transport;
  })
  return results
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results = this.journeys.filter((journeys) => {
    return journeys.distance >= minDistance;
  })
  return results

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const results = this.journeys.reduce((total, journeys) => {
    return total + journeys.length;
  }, 0)
  return results
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
