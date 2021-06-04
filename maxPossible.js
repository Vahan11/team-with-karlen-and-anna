/*
    Write a function that makes the first number as large as possible by
    swapping out its digits for digits in the second number.
    maxPossible(9328, 456) ➞ 9658
    9658 is the largest possible number built from swaps from 456.
    3 replaced with 6 and 2 replaced with 5.

maxPossible(523, 76) ➞ 763
maxPossible(9132, 5564) ➞ 9655
maxPossible(8732, 91255) ➞ 9755

*/

function maxPossible(num, num2) {
  let arr1 = String(num).split("");

  let arr2 = String(num2)
    .split("")
    .sort((a, b) => b - a);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[0]) {
      arr1[i] = arr2.shift();
    }
  }
  return arr1.join("");
}
console.log(maxPossible(523, 76)); // 763
