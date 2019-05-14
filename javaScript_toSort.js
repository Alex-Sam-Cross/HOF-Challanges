// Write a JavaScript function to check whether an 'input' is an array or not.

var is_array = function(input) {
  if (toString.call(input) === '[object Array]') return true;
  return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

let insertDash = num => {
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
console.log(insertDash(025468));

// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let swapCase = str => {
  let result = '';
  for (let char of str) {
    result +=
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return result;
};
console.log(swapCase('The Quick Brown Fox'));
