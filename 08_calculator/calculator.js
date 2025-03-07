const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	if (a.length === 0){
    return 0;
  } else {
    return a.reduce((sum, num) => sum += num, 0);
  }
};

const multiply = function(a) {
  if (a.length === 0){
    return 0
  }else{
    return a.reduce((prod, num) => prod *= num, 1);
  }
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i; 
  }
  return result;
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
