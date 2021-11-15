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

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// `$  ` used to format company.name, company.start and company.end into one object -- 'Company One [1981 - 2004]'

// const partMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

const partMap = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

console.log(partMap);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

console.log(ageMap);
