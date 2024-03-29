// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
reverseString = (str) => {
  // return str.split('').reverse().join('');

  // let revString = '';
  // for(let i = str.length -1; i >= 0; i--){
  //      revString = revString + str[i];
  //  }
  //  return revString

  //  let revString = '';
  //  for(let i = 0; i <= str.length -1; i++){
  //      revString = str[i] + revString;
  //  }
  //  return revString

  //  Reversing a string without using built-in function
  //  let revString = '';
  //  for(let char of str){
  //      revString = char + revString;
  //  }
  //  return revString

  //  let revString = '';
  //  str.split('').forEach(char => revString = char + revString);
  //  return revString

  return str.split('').reduce((revString, char) => char + revString);
}

reverseInt = (int) => {
  //* Math.sign(int) keep the negitive symbol if needed.
  return (
    parseInt(
      int
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(int)
  );
}

isPalindrome = (str) => {
  const revString = str
    .split('')
    .reverse()
    .join('');
  return revString === str;
}

capitalizeLetters = (str) => {
  // const strArr = str.toLowerCase().split(' ');
  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase();
  // });

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

modeCharactor = (str) => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    // debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar + maxNum;
}

fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

longestWord = (sen) => {
  const wordArr = sen.match(/[a-zA-Z0-9]+/g);
  const sortedArr = wordArr.sort((a, b) => b.length - a.length);
  const longArr = sortedArr.filter(word => word.length === sortedArr[0].length);

  if (longArr === 0) {
    return longArr[0];
  } else {
    return longArr;
  }
}

const strOutput = reverseString('hello');
const intOutput = reverseInt(-12345);
const palindrome = isPalindrome('racecar');
const capitalizeFirstLetters = capitalizeLetters('i love code challanges');
const modeChar = modeCharactor('JavaScript');
const fizz = fizzBuzz();
const longWord = longestWord('Hello there my name is Sam');

console.log(greeting);
console.log(strInput);
console.log(strOutput);
console.log(intOutput);
console.log(palindrome);
console.log(capitalizeFirstLetters);
console.log(fizz);
console.log(modeChar);
console.log(longWord);
