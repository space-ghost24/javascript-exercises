const convertToCelsius = function(fTemp) {
  let num = (fTemp - 32)/(9/5);
  return Math.round(num * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  let num = cTemp * 9/5 + 32;
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
