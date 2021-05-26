const Bubblesort = require('./components/bubblesort');
const Quicksort = require('./components/quicksort');


let array = [5,4,8,2,6,7,1,3,9];


let output = `
    DEFAULT
`
array.forEach(element => {
    output += `${element} , `;
});

console.log(output);

Bubblesort.sort(array);

output = `
    Bubblesort
`
array.forEach(element => {
    output += `${element} , `;
});

console.log(output);


array = [5,4,8,2,6,7,1,3,9];

Quicksort.sort(array, 0 , array.length - 1);

output = `
    Quicksort
`
array.forEach(element => {
    output += `${element} , `;
});

console.log(output);