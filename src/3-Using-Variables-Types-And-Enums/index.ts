// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Enum

const enum ProductType { // OR enum ProductType
  Sports,
  HomeGoods,
  Groceries
}

console.log('here', ProductType.Sports);

const pt = 0; // OR const pt = ProductType.Sports;
if(pt === ProductType.Sports) {
  console.log('it\'s equal');
}
