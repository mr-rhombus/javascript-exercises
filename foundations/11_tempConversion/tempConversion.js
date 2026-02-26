const convertToCelsius = function(temp) {
  return round((5/9) * (temp - 32), 1)
};

const convertToFahrenheit = function(temp) {
  return round((9/5) * temp + 32, 1)
};

const round = function(num, decimals) {
  return parseFloat(num.toFixed(decimals))
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
