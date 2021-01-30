// Data Types
// Primitive
const Name = "Abhishek"; // Any string of characters!
const Age = 50; // Any number, floating point, decimal or exponent
const Student = true; // true or false
const Nothing = undefined; // Nothing! :P
let AnotherNothing; // Nothing! :P
// Structural
const Person = {
  Name: "Piyush",
  Age: 60,
  Senior: true,
  BungeeScore: undefined
};
const StudentsAndData = [
  "Abhishek",
  "Piyush",
  new Date(),
  350.07,
  true,
  20,
  {
    ClassName: "GeeksforGeeks",
    Type: "Live Classes",
    Software: "Zoom",
    Version: 4,
    IsLive: true
  },
  ["Praveen", "Kumar"]
];
function doSomething() {
  console.log("Did Something!");
}
// Complicated
var DefinedAndNothing = null;

console.log("Type of Name: ", typeof Name);
console.log("Type of Age: ", typeof Age);
console.log("Type of Student: ", typeof Student);
console.log("Type of Nothing: ", typeof Nothing);
console.log("Type of AnotherNothing: ", typeof AnotherNothing);
console.log("Type of Person: ", typeof Person);
console.log("Type of StudentsAndData: ", typeof StudentsAndData);
console.log("Type of doSomething: ", typeof doSomething);
console.log("Type of DefinedAndNothing: ", typeof DefinedAndNothing);
