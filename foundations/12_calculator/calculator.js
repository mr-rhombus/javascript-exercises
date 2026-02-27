const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let res = 0;
  let i = 0;
  while (i < arr.length) {
    res += arr[i]
    i++
  }
  return res
};

const multiply = function(arr) {
  let res = 1;
  let i = 0;
  while (i < arr.length) {
    res *= arr[i]
    i++
  }
  return res
};

const power = function(base, exp) {
	return base ** exp
};

const factorial = function(num) {
	let res = 1;
  let i = 0;
  let increment;
  if (num > 0) {
    increment = -1;
  } else {
    increment = 1;
  }
  while (Math.abs(i) < Math.abs(num)) {
    res *= (num + increment * i);
    i++;
  }
  return res
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
