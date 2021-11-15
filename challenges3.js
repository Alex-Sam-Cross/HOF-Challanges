// Write a JavaScript function to check whether an 'input' is an array or not.

is_array = (input) => {
  if (toString.call(input) === '[object Array]') return true;
  return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

insertDash = (num) => {
  let str = num.toString();
  let result = [str[0]];
  for (var x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push('-', str[x]);
    } else {
      result.push(str[x]);
    }
  }
  return result.join('');
};
console.log(insertDash(02546));

// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

swapCase = (str) => {
  let result = '';
  for (let char of str) {
    result +=
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return result;
};
console.log(swapCase('The Quick Brown Fox'));

// Write a JavaScript program which prints the elements of the following array.

// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// a sample 2-D array
printElem = (arr) => {
  for (let i in arr) {
    console.log(`row ${i}`);
    for (let j in arr[i]) {
      console.log(` ${arr[i][j]}`);
    }
  }
};
printElem([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
]);

// Write a JavaScript program to find the sum of squares of a numeric vector.
// sum_sq = (arr) => {
//   var sum = 0,
//     i = arr.length;
//   while (i--) {
//     sum += Math.pow(arr[i], 2);
//   }
//   return sum;
// }
// console.log(sum_sq([0, 1, 2, 3, 4]));

sum_s = (arr) => {
  let sum = 0;
  arr.forEach(arr => {
    sum += Math.pow(arr, 2);
  });
  return sum;
}
console.log(sum_s([0, 1, 2, 3, 4]));

// Write a JavaScript program to compute the sum and product of an array of integers.
sumProduct = (arr) => {
  let s = 0;
  let p = 1;
  arr.forEach(arr => {
    s += arr;
    p *= arr;
  });
  return `Sum : ${s} Product :  ${p}`;
};

console.log(sumProduct([1, 2, 3, 4, 5, 6]));

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
removeDuplicate = (arr) => {
  return new Set(arr);
};
console.log(removeDuplicate([1, 2, 2, 3, 'a', 'a', 4, 4, 5, 6]));

// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
sumArraysByIndex = (array1, array2) => {
  var result = [];
  var length = Math.max(array1.length, array2.length);
  for (var i = 0; length > i; i++) {
    if (array1[i] && array2[i]) {
      result.push(array1[i] + array2[i]);
    } else if (array1[i] && !array2[i]) {
      result.push(array1[i]);
    } else if (array2[i] && !array1[i]) {
      result.push(array2[i]);
    }
  }
  return result;
}
console.log(sumArraysByIndex([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
