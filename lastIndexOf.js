function lastIndexOf(array, value) {
  var match = false;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      match = true;
      break;
    }
  }
  if (match) {
    return i;
  } else {
    return -1;
  }
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);