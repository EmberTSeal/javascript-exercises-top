const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
  return (num1 - num2);
};

const sum = function(arr) {
  let sum = 0;
	for(let i = 0; i < arr.length ; i++)
    sum += arr[i];
  return sum;
};

const multiply = function() {
  let res = 1;
  for(let i = 0; i<arguments.length; i++)
    res *= arguments[i];
  return res;
};

const power = function(base, index) {
	return Math.pow(base, index);
};

const factorial = function(num) {
	let fact = 1;
  for(let i=1; i<=num; i++)
    fact*= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
