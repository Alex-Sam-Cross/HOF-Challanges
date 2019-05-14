// take string and add a space after each char.
function char(str) {
  return str
    .split('')
    .map(c => c + ' ')
    .join('');
}

const addChars = char('hello');
console.log(addChars);

// double integer values in array

function doubleIntArr(int) {
  return int.map(i => i * 2);
}

const doubleInt = doubleIntArr([1, 2, 3, 4, 5]);
console.log(doubleInt);

// reverse str
function reverseString(str) {
  // Reversing a string without using built-in function
  // let revString = '';
  // for(let char of str){
  //     revString = char + revString;
  // }
  // return revString
  return (revStr = str.split('').reduce((revString, c) => c + revString));
}

// research reduce
const strRev = reverseString('hello');
console.log(strRev);

function reverseInt(int) {
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
const intreverse = reverseInt(-12345);
console.log(intreverse);

// learning Set
function mySet(arr) {
  let mySet = new Set(arr);
  mySet.add('100'); // adding a string into the set
  mySet.add({ a: 1, b: 2 }); // adding an object into the set
  mySet.delete(22); // delete from the set
  // mySet.clear(); // remove everything out the set

  // mySet.forEach( (val) => console.log(val) ); // can loop through sets

  return mySet;
}
const set = mySet([11, 22, 34, 64, 34]);
console.log(set); //return set
//console.log(set.size); //return set size

function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce((a, b) => a.concat(b));
  // SOLUTION 2
  // return [].concat.apply([], arrays);
  // SOLUTION 3
  return [].concat(...arrays);
}
const fArr = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(fArr); //return set

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}
// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

const checkAnagram = isAnagram('Sam', 'Mas');
console.log(checkAnagram); //return set
