a = 1;
// Forget this function for now! :P
(function () {
  // One: Global scope.
  a = 5;
  // Two: Local / Function level scope.
  var b = 10;
  {
    // Three: Block level scope, variable.
    let c = 15;
    // Four: Block level scope, constant.
    const d = 20;
    // console.log({ a, b, c, d });
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("d = " + d);
  }
})();
console.log("a = " + a);
