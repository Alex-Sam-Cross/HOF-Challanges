const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

// for loop - Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Often this is the case when working with arrays:

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach - The forEach() method calls a provided function once for each element in an array, in order.
// Note: forEach() does not execute the function for array elements without values.

companies.forEach(function(company) {
  console.log(company);
  //console.log(company.name);
});
