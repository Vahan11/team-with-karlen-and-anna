function nestedArray(arr, index = 0) {
  if (arr[index] instanceof Array) {
    arr.splice(index, 1, ...arr[index]);
    index -= 1;
  }
  if (index === arr.length - 1) {
    return arr;
  }
  return nestedArray(arr, (index += 1));
}

console.log(nestedArray([1, [3, 4, [1, 2]], 10]));
console.log(nestedArray([14, [1, [[[3, []]], 1], 0]]));

// function nestedArray(arr, result = []) {
//   if (arr.length === 0) {
//     return result;
//   }
//   let [first, ...rest] = arr;
//   if (Array.isArray(first)) {
//     return nestedArray(first, result);
//   }

//   result.push(first);

//   return nestedArray(rest, result);
// }

// console.log(nestedArray([1, [3, 4, [1, 2]], 10]));
// console.log(nestedArray([14, [1, [[[3, []]], 1], 0]]));
