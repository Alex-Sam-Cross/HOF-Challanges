//Create an array with unique values using the "Set" object;
const arrayWithUniqueItems = [ ...new Set([1, 2, 2, 3, 3])]
//[1, 2, 3]

//---

//ES2021 Short logical assignmet operator
let x = false
//Old - ES5
if (!x) {
  x = true
}
//New - ES6
x = x || true
//Newest - ES2021
x ||= true

console.log(x) //true

//---

//Shorten if statments
if (isHungry) {
  haveFood()
}
//Shorten too 
if (isHungry) haveFood()
//or this
isHungry ? haveFood() : 0

//---

//Common switch case
getCity = (city) => {
  let city;
  switch (city) {
    case 'MG':
      city = 'Belzonte'
      break;
    case 'SP':
      city = 'Sampa'
      break;
    case 'RJ':
      city = 'Errejota'
      break;
    case 'MG':
      city = 'Belzonte'
      break;
    case 'default':
      city = 'Not found'
  }
  return city
}
//ES6 
const getCity = city => ({
  MG: 'Belzonte',
  SP: 'Sampa',
  RJ: 'Errejota'
}[city] || 'Not found')