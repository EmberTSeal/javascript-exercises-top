//c/5 = (f-32)/9
// 9c/5 + 32 = f
const convertToCelsius = function(tempInFarenheit) {
  let result = Number((5*(tempInFarenheit - 32)/9).toFixed(1));
  return result;
};

const convertToFahrenheit = function(tempInCelsius) {
  return Number(((9*tempInCelsius/5 + 32)).toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
