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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const num = [-33, 12, -20, 16, 5, 64, 21, 44, 61, -13, 15, 45, 25, 64, 32];
// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

console.log(sortedCompanies);

// const sortAges  = ages.sort( (i1, i2) => (i1 > i2) ?  1 : -1);
const sortAges = new Set(ages.sort((i1, i2) => i1 - i2));

console.log(sortAges);

// const num
const sortNum = num.sort((n1, n2) => n1 - n2);

console.log(sortNum);
