const arr = [1, [2], [3, [4]]];

function flat(arr, depth = 1) {
  let newArr = [...arr];
  while (depth > 0 && newArr.some(item => Array.isArray(item))) {
    newArr = newArr.reduce((acc, item) => acc.concat(item), []);
    depth--;
  }
  return newArr;
}

flat(arr) // [1, 2, 3, [4]]

flat(arr, 1) // [1, 2, 3, [4]]

flat(arr, 2) // [1, 2, 3, 4]
