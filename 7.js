// Evolution of Arrow functions.
// Normal traditional function.
function square (a) {
  return a * a;
}
// Convert function into anonymous function expression.
var square = function (a) {
  return a * a;
}
// Hello to Arrow functions.
const square = (a) => {
  return a * a;
};
// Let's remove the useless parantheses.
const square = a => {
  return a * a;
};
// Oh, there's something called implicit return.
const square = a => a * a;
const add = (a, b) => a + b;
