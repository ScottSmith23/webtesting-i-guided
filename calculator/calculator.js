module.exports = {
  add,
  multiply,
};

function add(args) {
  const numbers = Array.isArray(args) ? args : Array.from(arguments);
  
  return numbers.reduce((sum,number) => {
    return sum + number;
  },0)
}

function multiply(a,b) {
  return a*b;
}