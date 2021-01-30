// Array Awesomeness
const Students = [
  "Praveen Kumar",
  "Abhishek Kumar",
  "Dayanand Deepak",
  "Megha"
];
console.log(Students);
console.log(Students.map(s => s + " is learning MERN!").join("\n"));

const Months = "January,February,March,April,May,June,July,August,September,October,November,December".split(
  ","
);
console.log(Months.map((m, i) => `The month ${m} is the month #${i + 1}.`));
console.log(
  Months.map(function (m, i) {
    return `The month ${m} is the month #${i + 1}.`;
  })
);

// Numeric Range.
const Nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Nums1);
const Nums2 = Array.from(new Array(20).keys()).map(a => a + 1);
console.log(Nums2);

// Sum of all numbers.
var Sum = 0;
for (let i = 0; i < Nums1.length; i++) {
  Sum = Sum + Nums1[i];
}
console.log(Sum);

var Sum = 0;
for (let i = 0; i < Nums1.length; i++) {
  Sum += Nums1[i];
}
console.log(Sum);

var acc = 0;
for (let i = 0; i < Nums1.length; i++) {
  var cur = Nums1[i];
  acc = acc + cur;
}
console.log(acc);

// console.log(Nums1.reduce((acc, cur) => acc + cur, 0));
// first round
// acc = 0
// cur = 1
// at the end of first round
// acc = acc + cur = 0 + 1
// second round
// acc = 1
// cur = 2
// at the end of second round
// acc = acc + cur = 1 + 2
// third round
// acc = 3
// cur = 3
// at the end of third round
// acc = acc + cur = 3 + 3
// fourth
// acc = 6
// cur = 4
// at the end of fourth round
// acc = acc + cur = 6 + 4
// fifth
// acc = 10
// cur = 5
// at the end of fifth round
// acc = acc + cur = 10 + 5
// -----

console.log(
  Nums1.reduce((acc, cur, round) => {
    console.log(`At round #${round + 1}:`);
    console.log({ acc, cur });
    console.log(`In the end...`);
    console.log(`acc = acc + cur = ${acc} + ${cur} = ${acc + cur}...`);
    return acc + cur;
  }, 0)
);
